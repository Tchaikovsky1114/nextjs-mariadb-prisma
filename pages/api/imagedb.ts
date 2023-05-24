import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch(req.method) {
        case 'GET':
            break;
        case 'POST':
            try {
                
            } catch (error) {
                
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