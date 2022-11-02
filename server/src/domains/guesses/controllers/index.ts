import { Router, Request, Response } from "express";
import {PrismaClient} from '@prisma/client';
import {z} from 'zod'

const prisma = new PrismaClient({
	log: ['query']
});

const router = Router();

router.get('/count',async(req: Request, res: Response)=>{
	const count = await prisma.guess.count();
	res.status(200).json(count);
});



export = router;