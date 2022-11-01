import { Router, Request, Response } from "express";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({
	log: ['query']
});

const router = Router();

router.get('/count',async(req: Request, res: Response)=>{
	const count = await prisma.pool.count();
	res.sendStatus(201).json(count);
});


export = router;