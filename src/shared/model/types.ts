import {Ingredient, Product, Option} from '@prisma/client';

export type OptionWithIngredients = Option & { ingredients: Ingredient[] };

export type ProductWithRelations = Product & {
	options: OptionWithIngredients[];
	ingredients: Ingredient[]
};