import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse)
  {
    switch(req.method) {
      case 'GET':
        try {
          
        } catch (error) {
          
        }
        break;
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'PATCH':
        break;
      case 'DELETE':
        break;
      default:
        res.status(405).end(JSON.stringify({message: '허용되지 않는 메소드입니다.'}));
    }
  }