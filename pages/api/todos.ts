import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
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
          const post = await prisma.todo.findUnique({
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
          const posts = await prisma.todo.findMany();
          res.json(posts);
        } catch (error) {
          console.error(error);
        }
        break;
      }
    case 'POST':
      try {
        await prisma.todo.create({
          data: {
            title: req.body.title,
            content: req.body.content,
            isCompleted: false,
            updatedAt: new Date()
          }
        })

        res.json({ message: 'Post created successfully' });
        // cache된 데이터 갱신
        mutate('api/todos');
      } catch (error) {
        console.error(error);
      }
      break;
    case 'PUT':
      try {
        await prisma.todo.update({
          where: {
            id: parseInt(req.body.id),
          },
          data: {
            isCompleted: req.body.isCompleted,
          },
        });
        res.json({ message: 'Post updated successfully' });
        // cache된 데이터 갱신
        mutate('api/todos');
      } catch (error) {
        console.error(error);
      }
      break;
    case 'PATCH':
      break;
    case 'DELETE':
      try {
        await prisma.todo.delete({
          where: {
            id: Number(req.query.id),
          },
        });
        res.json({ message: 'Post deleted successfully' });
        // cache된 데이터 갱신
        mutate('api/todos');
      } catch (error) {
        console.error(error);
      }
      break;
    default:
      res
        .status(405)
        .end(JSON.stringify({ message: '허용되지 않는 메소드입니다.' }));
      break;
  }
}
