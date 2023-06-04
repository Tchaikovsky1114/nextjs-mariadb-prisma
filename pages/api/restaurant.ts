import { SEVENBEACH_URL } from '@/constants/constants';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        const response = await fetch(
          SEVENBEACH_URL + `api/rstr?pageNo=${req.query.pageNum}&serviceKey=${process.env.NEXT_PUBLIC_BUSAN_7BEACH_API_KEY}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }

    case 'POST':
      try {
        await prisma.restaurant.createMany({
          data: req.body,
          skipDuplicates: true,
        })
        res.status(201).json({message: '레스토랑 정보를 성공적으로 저장하였습니다.'})
      } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
      }
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.status(405).end();
  }
}
