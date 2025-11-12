import { prisma } from '@prisma/prisma-client';

export const findOrCreateCart = async (userToken: string) => {
	let cart = await prisma.cart.findFirst({
		where: {
			token: userToken,
		},
		include: {
			cartItems: {
				include: {
					ingredients: true,
				}
			},
		}
	});

	if (!cart) {
		cart = await prisma.cart.create({
			data: {
				token: userToken,
			},
			include: {
				cartItems: {
					include: {
						ingredients: true,
					}
				},
			}
		});
	}

	return cart;
}