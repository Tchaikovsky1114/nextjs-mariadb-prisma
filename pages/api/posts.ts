import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { mutate } from 'swr';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        try {
          const post = await prisma.posts.findUnique({
            where: {
              id: Number(req.query.id),
            },
          });
          res.json(post);
        } catch (error) {
          console.error(error);
        }
        break;
      } else {
        try {
          const posts = await prisma.posts.findMany();
          res.json(posts);
        } catch (error) {
          console.error(error);
        }
        break;
      }
    case 'POST':
      try {
        await prisma.posts.create({
          data: {
            title: req.body.title,
            content: req.body.content,
          },
        });
        res.json({ message: 'Post created successfully' });
        // cache된 데이터 갱신
        mutate('api/posts');
      } catch (error) {
        console.error(error);
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
      break;
  }
}
