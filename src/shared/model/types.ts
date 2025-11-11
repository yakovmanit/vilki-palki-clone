import { Cart, CartItem, Ingredient, Option, Product } from '@prisma/client';

export type OptionWithIngredients = Option & { ingredients: Ingredient[] };

export type ProductWithRelations = Product & {
	options: OptionWithIngredients[];
	ingredients: Ingredient[];
};

type cartProduct = ProductWithRelations & {
	category: {
		titleUK: string;
		titleEN: string;
	}[];
};

export type FullCartItem = CartItem & { ingredients: Ingredient[] } & {
	product: cartProduct;
};

export type ExtendedCart = Cart & { cartItems: FullCartItem[] };
