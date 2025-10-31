import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';

async function up() {
	// 1. Create Ingredients
	await prisma.ingredient.createMany({
		data: ingredients,
	});

	// 2. Create Categories
	await prisma.category.createMany({
		data: categories,
	});

	// 3. Create Products with basic data
	await prisma.product.createMany({
		data: products,
	});

	// 4. Create Options with ingredients
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

	// 5. Update products with categories, options and ingredients

	// Гарячі роли (Hot rolls) - категорія 6
	await prisma.product.update({
		where: { id: 1 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 2 }, { id: 6 }], // Все + Роли + Гарячі роли
			},
			options: {
				connect: [{ id: option1.id }, { id: option2.id }],
			},
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }],
			},
		},
	});

	await prisma.product.update({
		where: { id: 2 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 2 }, { id: 6 }], // Все + Роли + Гарячі роли
			},
			options: {
				connect: [{ id: option1.id }, { id: option2.id }],
			},
			ingredients: {
				connect: [{ id: 1 }],
			},
		},
	});

	// Холодні роли (Cold rolls) - категорія 7
	await prisma.product.update({
		where: { id: 3 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 2 }, { id: 7 }], // Все + Роли + Холодні роли
			},
			options: {
				connect: [{ id: option1.id }, { id: option2.id }],
			},
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }],
			},
		},
	});

	await prisma.product.update({
		where: { id: 4 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 2 }, { id: 7 }], // Все + Роли + Холодні роли
			},
			options: {
				connect: [{ id: option1.id }, { id: option2.id }],
			},
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	});

	// Нігірі (Nigiri) - категорія 8
	await prisma.product.update({
		where: { id: 5 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 3 }, { id: 8 }], // Все + Суші + Нігірі
			},
			options: {
				connect: [{ id: option1.id }],
			},
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	});

	await prisma.product.update({
		where: { id: 6 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 3 }, { id: 8 }], // Все + Суші + Нігірі
			},
			options: {
				connect: [{ id: option1.id }],
			},
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	});

	// Гункан (Gunkan) - категорія 9
	await prisma.product.update({
		where: { id: 7 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 3 }, { id: 9 }], // Все + Суші + Гункан
			},
			options: {
				connect: [{ id: option1.id }],
			},
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	});

	await prisma.product.update({
		where: { id: 8 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 3 }, { id: 9 }], // Все + Суші + Гункан
			},
			options: {
				connect: [{ id: option1.id }],
			},
			ingredients: {
				connect: [{ id: 2 }],
			},
		},
	});

	// М'ясна піца (Meat pizza) - категорія 10
	await prisma.product.update({
		where: { id: 9 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 4 }, { id: 10 }], // Все + Піца + М'ясна піца
			},
			options: {
				connect: [{ id: option3.id }],
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
				connect: [{ id: 1 }, { id: 4 }, { id: 10 }], // Все + Піца + М'ясна піца
			},
			options: {
				connect: [{ id: option3.id }],
			},
			ingredients: {
				connect: [{ id: 6 }, { id: 7 }],
			},
		},
	});

	// Вегетаріанська піца (Vegetarian pizza) - категорія 11
	await prisma.product.update({
		where: { id: 11 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 4 }, { id: 11 }], // Все + Піца + Вегетаріанська піца
			},
			options: {
				connect: [{ id: option3.id }],
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
				connect: [{ id: 1 }, { id: 4 }, { id: 11 }], // Все + Піца + Вегетаріанська піца
			},
			options: {
				connect: [{ id: option3.id }],
			},
			ingredients: {
				connect: [{ id: 5 }, { id: 7 }],
			},
		},
	});

	// Напої (Drinks) - категорія 5, без опцій
	await prisma.product.update({
		where: { id: 13 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 5 }], // Все + Напої
			},
		},
	});

	await prisma.product.update({
		where: { id: 14 },
		data: {
			category: {
				connect: [{ id: 1 }, { id: 5 }], // Все + Напої
			},
		},
	});
}

async function down() {
	await prisma.product.deleteMany({});
	await prisma.option.deleteMany({});
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
