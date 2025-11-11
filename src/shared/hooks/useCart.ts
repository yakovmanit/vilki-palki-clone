import { useGetCartQuery } from '@shared/redux';

export const useCart = () => {
	const { data, isLoading } = useGetCartQuery();

	const cartItems = data?.cartItems.map((cartItem) => {
		return {
			cartItemId: cartItem.id,
			productId: cartItem.product.id,
			titleEN: cartItem.product.titleEN,
			titleUK: cartItem.product.titleUK,
			price: cartItem.product.price,
			ingredients: cartItem.ingredients,
			categoryName: cartItem.product.category[1].titleUK,
			weight: cartItem.product.weight,
			imageUrl: cartItem.product.imageUrl,
			quantity: cartItem.quantity,
		};
	});

	return {
		cartItems,
		isLoading,
		cartTotalAmount: data?.totalAmount || 0,
	};
};
