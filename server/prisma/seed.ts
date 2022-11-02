import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: 'putaoDeTeste23',
			email: 'putao23@hmail.com',
			avatarUrl: 'https://github.com/vipigal.png'
		}
	});

	const pool = await prisma.pool.create({
		data: {
			title: 'Bolao do puto22png',
			code: 'PUTO222',
			ownerId: user.id,

			participants: {
				create:{
					userId: user.id
				}
			}
		}
	});

	const game1 = await prisma.game.create({
		data:{
			date: '2022-11-23T12:30:00.318Z',
			firstTeamCountryCode: 'BR',
			secondTeamCountryCode: 'DE'
		}
	});

	const game2 = await prisma.game.create({
		data:{
			date: '2022-11-27T12:30:00.318Z',
			firstTeamCountryCode: 'BR',
			secondTeamCountryCode: 'SB',

			guesses: {
				create: {
					firstTeamScore: 2,
					secondTeamScore: 3,
					participant: {
						connect: {
							userId_poolId: {
								userId: user.id,
								poolId: pool.id
							}
						}
					}
				}
			}
		}
	});
}


main();