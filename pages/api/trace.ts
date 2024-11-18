import type { NextApiRequest, NextApiResponse } from 'next'
import discord from 'discord.js';

const webhookClient = new discord.WebhookClient({ url: process.env.DISCORD_TRACE_WEBHOOK });

export const config = {
    api: {
        bodyParser: true,
    }
  };

  export default async function handler(req, res) {
    const reqBody = req.body;
    const traceString = reqBody.trace;
    
    webhookClient.send({
        content: 'New trace file uploaded',
        files: [
            new discord.AttachmentBuilder(Buffer.from(traceString, 'utf8'), { name: 'trace.txt' })
        ]
    });

    res.status(200).json({
        "message": "Success!"
    })
};