import { NextApiRequest, NextApiResponse } from 'next';
import S3 from 'aws-sdk/clients/s3';

const s3 = new S3({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  signatureVersion: 'v4',
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, type } = req.body;
  console.log(req.body);

  if (name === undefined || type === undefined) {
    res
      .status(400)
      .end(
        JSON.stringify({ message: 'Key 또는 Type이 명시되어 있지 않습니다.' })
      );
  }
  const fileParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: name,
    Expires: 600,
    ContentType: type,
    ACL: 'public-read',
  };

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      try {
        // s3.createPresignedPost
        const url = await s3.getSignedUrlPromise('putObject', fileParams);
        res.json({ message: 'URL 변경을 완료하였습니다.', url });
      } catch (error) {
        res.status(400).json({ error });
      }
      break;
    case 'PUT':
      break;
    case 'PATCH':
      break;
    case 'DELETE':
      break;
    default:
      res
        .status(405)
        .end(JSON.stringify({ message: '허용되지 않는 메소드입니다.' }));
  }
}
