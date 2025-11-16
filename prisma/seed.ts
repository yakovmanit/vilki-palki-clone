import { UserRole } from '@prisma/client';

import {
	categories,
	subcategories,
	ingredients,
	products,
} from './constants';
import { prisma } from './prisma-client';

async function up() {
	// Create Category Filters (unique, shared across categories)
	await prisma.categoryFilter.create({
		data: {
			id: 1,
			titleUK: 'Нові',
			titleEN: 'New',
		},
	});
	await prisma.categoryFilter.create({
		data: {
			id: 2,
			titleUK: 'Гострі',
			titleEN: 'Spicy',
		},
	});
	await prisma.categoryFilter.create({
		data: {
			id: 3,
			titleUK: 'З сьомгою',
			titleEN: 'With salmon',
		},
	});
	await prisma.categoryFilter.create({
		data: {
			id: 4,
			titleUK: 'З вугрем',
			titleEN: 'With eel',
		},
	});
	await prisma.categoryFilter.create({
		data: {
			id: 5,
			titleUK: 'З креветкою',
			titleEN: 'With shrimp',
		},
	});
	await prisma.categoryFilter.create({
		data: {
			id: 6,
			titleUK: 'Веганські',
			titleEN: 'Vegan',
		},
	});

	// 1. Create Ingredients
	await prisma.ingredient.createMany({
		data: ingredients,
	});

	// 2. Create main Categories
	await prisma.category.createMany({
		data: categories,
	});

	// 3. Create Subcategories with parent relationships
	for (const subcat of subcategories) {
		const parent = await prisma.category.findUnique({
			where: { slug: subcat.parentSlug },
		});

		if (parent) {
			await prisma.category.create({
				data: {
					titleUK: subcat.titleUK,
					titleEN: subcat.titleEN,
					slug: subcat.slug,
					imageUrl: subcat.imageUrl,
					parentId: parent.id,
				},
			});
		}
	}

	// 4. Connect filters to categories (many-to-many)
	// Суші category filters: Нові, Гострі, З сьомгою, З вугрем
	const sushiCategory = await prisma.category.findUnique({
		where: { slug: 'sushi' },
	});
	if (sushiCategory) {
		await prisma.category.update({
			where: { id: sushiCategory.id },
			data: {
				categoryFilters: {
					connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
				},
			},
		});
	}

	// Роли subcategory filters: З сьомгою, З креветкою, Веганські
	const rollsCategory = await prisma.category.findUnique({
		where: { slug: 'rolls' },
	});
	if (rollsCategory) {
		await prisma.category.update({
			where: { id: rollsCategory.id },
			data: {
				categoryFilters: {
					connect: [{ id: 3 }, { id: 5 }, { id: 6 }],
				},
			},
		});
	}

	// Гункан subcategory filters: З вугрем, З креветкою
	const gunkanCategory = await prisma.category.findUnique({
		where: { slug: 'gunkan' },
	});
	if (gunkanCategory) {
		await prisma.category.update({
			where: { id: gunkanCategory.id },
			data: {
				categoryFilters: {
					connect: [{ id: 4 }, { id: 5 }],
				},
			},
		});
	}

	// Теплі роли has no filters

	// 5. Create Products with basic data
	await prisma.product.createMany({
		data: products,
	});

	// 6. Get all categories for later use
	const allCategory = await prisma.category.findUnique({
		where: { slug: 'all' },
	});
	const warmRollsCategory = await prisma.category.findUnique({
		where: { slug: 'warm-rolls' },
	});
	const coldRollsCategory = await prisma.category.findUnique({
		where: { slug: 'cold-rolls' },
	});
	const meatPizzaCategory = await prisma.category.findUnique({
		where: { slug: 'meat-pizza' },
	});
	const vegetarianPizzaCategory = await prisma.category.findUnique({
		where: { slug: 'vegetarian-pizza' },
	});
	const drinksCategory = await prisma.category.findUnique({
		where: { slug: 'drinks' },
	});
	const pizzaCategory = await prisma.category.findUnique({
		where: { slug: 'pizza' },
	});

	// 7. Create Options with ingredients
	const option1 = await prisma.option.create({
		data: {
			id: 1,
			titleUK: 'Соус',
			titleEN: 'Sauce',
			required: true,
			ingredients: {
				connect: [{ id: 3 }, { id: 4 }], // Томатний Чилі, Французький
			},
		},
	});

	const option2 = await prisma.option.create({
		data: {
			id: 2,
			titleUK: 'Бортик',
			titleEN: 'Edge',
			required: false,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }], // З сиром Філадельфія, Кунжутний
			},
		},
	});

	const option3 = await prisma.option.create({
		data: {
			id: 3,
			titleUK: 'Додатково',
			titleEN: 'Additional',
			required: false,
			ingredients: {
				connect: [{ id: 5 }, { id: 6 }, { id: 7 }], // Без цибулі, Мисливські ковбаски, Сир моцарела
			},
		},
	});

	// 8. Update products with categories, options and ingredients

	// Теплі роли (Warm rolls)
	if (allCategory && sushiCategory && warmRollsCategory) {
		await prisma.product.update({
			where: { id: 1 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: warmRollsCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 1 }, { id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 1 }, { id: 2 }], // Нові, Гострі
				},
			},
		});

		await prisma.product.update({
			where: { id: 2 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: warmRollsCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 1 }],
				},
				categoryFilters: {
					connect: [{ id: 1 }, { id: 3 }], // Нові, З сьомгою
				},
			},
		});
	}

	// Холодні роли (Cold rolls)
	if (allCategory && sushiCategory && rollsCategory && coldRollsCategory) {
		await prisma.product.update({
			where: { id: 3 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: rollsCategory.id },
						{ id: coldRollsCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 1 }, { id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 3 }, { id: 5 }], // З сьомгою, З креветкою
				},
			},
		});

		await prisma.product.update({
			where: { id: 4 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: rollsCategory.id },
						{ id: coldRollsCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 6 }], // Веганські
				},
			},
		});
	}

	// Нігірі (just Sushi category)
	if (allCategory && sushiCategory) {
		await prisma.product.update({
			where: { id: 5 },
			data: {
				category: {
					connect: [{ id: allCategory.id }, { id: sushiCategory.id }],
				},
				ingredients: {
					connect: [{ id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 3 }], // З сьомгою
				},
			},
		});

		await prisma.product.update({
			where: { id: 6 },
			data: {
				category: {
					connect: [{ id: allCategory.id }, { id: sushiCategory.id }],
				},
				ingredients: {
					connect: [{ id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 4 }], // З вугрем
				},
			},
		});
	}

	// Гункан (Gunkan)
	if (allCategory && sushiCategory && gunkanCategory) {
		await prisma.product.update({
			where: { id: 7 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: gunkanCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 3 }, { id: 5 }], // З сьомгою, З креветкою
				},
			},
		});

		await prisma.product.update({
			where: { id: 8 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: sushiCategory.id },
						{ id: gunkanCategory.id },
					],
				},
				ingredients: {
					connect: [{ id: 2 }],
				},
				categoryFilters: {
					connect: [{ id: 4 }], // З вугрем
				},
			},
		});
	}

	// М'ясна піца (Meat pizza)
	if (allCategory && pizzaCategory && meatPizzaCategory) {
		await prisma.product.update({
			where: { id: 9 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: pizzaCategory.id },
						{ id: meatPizzaCategory.id },
					],
				},
				options: {
					connect: [
						{ id: option1.id },
						{ id: option2.id },
						{ id: option3.id },
					],
				},
				ingredients: {
					connect: [{ id: 6 }, { id: 7 }],
				},
			},
		});

		await prisma.product.update({
			where: { id: 10 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: pizzaCategory.id },
						{ id: meatPizzaCategory.id },
					],
				},
				options: {
					connect: [
						{ id: option1.id },
						{ id: option2.id },
						{ id: option3.id },
					],
				},
				ingredients: {
					connect: [{ id: 6 }, { id: 7 }],
				},
			},
		});
	}

	// Вегетаріанська піца (Vegetarian pizza)
	if (allCategory && pizzaCategory && vegetarianPizzaCategory) {
		await prisma.product.update({
			where: { id: 11 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: pizzaCategory.id },
						{ id: vegetarianPizzaCategory.id },
					],
				},
				options: {
					connect: [
						{ id: option1.id },
						{ id: option2.id },
						{ id: option3.id },
					],
				},
				ingredients: {
					connect: [{ id: 7 }],
				},
			},
		});

		await prisma.product.update({
			where: { id: 12 },
			data: {
				category: {
					connect: [
						{ id: allCategory.id },
						{ id: pizzaCategory.id },
						{ id: vegetarianPizzaCategory.id },
					],
				},
				options: {
					connect: [
						{ id: option1.id },
						{ id: option2.id },
						{ id: option3.id },
					],
				},
				ingredients: {
					connect: [{ id: 5 }, { id: 7 }],
				},
			},
		});
	}

	// Напої (Drinks)
	if (allCategory && drinksCategory) {
		await prisma.product.update({
			where: { id: 13 },
			data: {
				category: {
					connect: [{ id: allCategory.id }, { id: drinksCategory.id }],
				},
			},
		});

		await prisma.product.update({
			where: { id: 14 },
			data: {
				category: {
					connect: [{ id: allCategory.id }, { id: drinksCategory.id }],
				},
			},
		});
	}

	// 6. Create Users
	await prisma.user.createMany({
		data: [
			{
				id: 1,
				email: 'test@gmail1.com',
				password: 'hashedpassword',
				token: '11111',
				name: 'Alex',
				phone: '12345',
			},
			{
				id: 2,
				email: 'test@gmail2.com',
				password: 'hashedpassword',
				token: '22222',
				role: UserRole.ADMIN,
			},
		],
	});

	// 7. Create Cart
	await prisma.cart.createMany({
		data: [
			{
				id: 1,
				userId: 1,
				totalAmount: 865,
				token: '11111',
			},
			{
				id: 2,
				userId: 2,
				totalAmount: 200,
				token: '22222',
			},
		],
	});

	// 8. Create Cart Items
	await prisma.cartItem.create({
		data: {
			productId: 9,
			cartId: 1,
			quantity: 2,
			ingredients: { connect: [{ id: 3 }, { id: 4 }] },
		},
	});

	await prisma.cartItem.create({
		data: {
			productId: 7,
			cartId: 1,
			quantity: 1,
			ingredients: { connect: [{ id: 3 }, { id: 6 }] },
		},
	});

	await prisma.cartItem.create({
		data: {
			productId: 8,
			cartId: 2,
			quantity: 1,
			ingredients: { connect: [{ id: 5 }, { id: 6 }] },
		},
	});
}

async function down() {
	await prisma.user.deleteMany({});
	await prisma.cartItem.deleteMany({});
	await prisma.cart.deleteMany({});
	await prisma.product.deleteMany({});
	await prisma.option.deleteMany({});
	await prisma.categoryFilter.deleteMany({});
	await prisma.category.deleteMany({});
	await prisma.ingredient.deleteMany({});
}

export async function main() {
	try {
		await down();

		await up();
	} catch (err) {
		console.log('PRISMA ERR', err);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
