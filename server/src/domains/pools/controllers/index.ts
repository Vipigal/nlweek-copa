import { Router, Request, Response } from "express";
import {PrismaClient} from '@prisma/client';
import {z} from 'zod'
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient({
	log: ['query']
});

const router = Router();

router.get('/count',async(req: Request, res: Response)=>{
	const count = await prisma.pool.count();
	res.status(200).json(count);
});

router.post('/',async(req: Request, res: Response)=>{
	try {

		const createPoolBody = z.object({
			title: z.string(),
		});

		const {title} = createPoolBody.parse(req.body);
		const generateCode = new ShortUniqueId({length: 6});
		const code = String(generateCode()).toUpperCase();

		await prisma.pool.create({
			data:{
				title: title,
				code: code
			}
		})
		res.status(201).json(code);

	} catch (error) {
		res.status(500).json(error);
	}



});


export = router;