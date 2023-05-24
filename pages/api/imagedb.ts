import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";
import { mutate } from "swr";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch(req.method) {
        case 'GET':
            try {
                const imageUrls = await prisma.imageUrls.findMany();
                res.json(imageUrls);
            } catch (error) {
                
            }
            break;
        case 'POST':
            
            try {
                await prisma.imageUrls.create({
                    data: {
                        url: req.body.url,
                    }
                })
                res.json({ message: '성공적으로 등록되었습니다.' });
                mutate('api/imagedb');
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
    }
}