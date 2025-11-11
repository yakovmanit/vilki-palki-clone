import { prisma } from '@prisma/prisma-client';

export const updateCartTotalAmount = async (userToken: string) => {
	const cartItems = await prisma.cartItem.findMany({
		where: {
			cart: {
				token: userToken,
			},
		},
		include: {
			product: true,
			ingredients: true,
		},
	});

	const totalAmount = cartItems.reduce((total, item) => {
		const ingredientsTotal = item.ingredients.reduce(
			(ingTotal, ingredient) => ingTotal + ingredient.price,
			0,
		);
		const itemTotal = (item.product.price + ingredientsTotal) * item.quantity;
		return total + itemTotal;
	}, 0);

	await prisma.cart.updateMany({
		where: {
			token: userToken,
		},
		data: {
			totalAmount: totalAmount,
		},
	});
};
