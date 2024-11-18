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

type ProcessedFiles = Array<[string, File]>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
    const form = new formidable.IncomingForm();
    const files: ProcessedFiles = [];
    form.on('file', function (field, file) {
      files.push([field, file]);
    })
    form.on('end', () => resolve(files));
    form.on('error', err => reject(err));
    form.parse(req, () => {
      //
    });
  }).catch(e => {
    console.log("No files");
  });

  if (files && files.length) {
    const file = files[0];
    const tempPath = file[1].filepath;

    console.log("Temp path: ", tempPath)

    await fs.copyFileSync(tempPath, './public/builds');
  }

  res.status(200).json({ message: 'Hello from Next.js!' })
}