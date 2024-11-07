import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, { File } from 'formidable'; 
import fs from 'fs';

type ResponseData = {
  message: string
}
 
export const config = {
  api: {
      bodyParser: false,
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    console.log(req)

    res.status(200).json({ message: 'Hello from Next.js!' })
}