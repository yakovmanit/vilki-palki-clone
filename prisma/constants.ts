export const ingredients = [
	{
		id: 1,
		titleUK: 'З сиром Філадельфія',
		titleEN: 'With Philadelphia cheese',
		price: 50,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/1616060487Syr-Philadelphia.png.webp',
		weight: 100,
	},
	{
		id: 2,
		titleUK: 'Кунжутний',
		titleEN: 'Sesame',
		price: 100,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/ed/ab/176054755614.jpg',
		weight: 14,
	},
	{
		id: 3,
		titleUK: 'Томатний Чилі',
		titleEN: 'Tomato Chili',
		price: 0,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/1617355497Sous-Tomatnyi-Chili.png.webp',
		weight: 35,
	},
	{
		id: 4,
		titleUK: 'Французький',
		titleEN: 'French',
		price: 0,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/1617355478Sous-Francuzkyi-.png.webp',
		weight: 35,
	},
	{
		id: 5,
		titleUK: 'Без цибулі',
		titleEN: 'Without onion',
		price: 0,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/16838022778-removebg-preview.png.webp',
		weight: 0,
	},
	{
		id: 6,
		titleUK: 'Мисливські ковбаски',
		titleEN: 'Hunting sausages',
		price: 0,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/16088995281608899528Ohotnichi-kolbaski.png.webp',
		weight: 0,
	},
	{
		id: 7,
		titleUK: 'Сир моцарела',
		titleEN: 'Mozzarella cheese',
		price: 0,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/16079438961607943896Syr-Mocarella.png.webp',
		weight: 0,
	},
];

export const categories = [
	// Main categories
	{
		id: 1,
		titleUK: 'Все',
		titleEN: 'All',
		slug: 'all',
		imageUrl:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fru%2Ffree-icon%2Fgroceries_6805578&psig=AOvVaw31Qxi8J1097ENJJKNtl5TW&ust=1761996767385000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCAyc-rzpADFQAAAAAdAAAAABAE',
	},
	{
		id: 2,
		titleUK: 'Роли',
		titleEN: 'Rolls',
		slug: 'rolls',
		imageUrl: 'https://cdn-icons-png.flaticon.com/512/3978/3978693.png',
	},
	{
		id: 3,
		titleUK: 'Суші',
		titleEN: 'Sushi',
		slug: 'sushi',
		imageUrl: 'https://cdn-icons-png.flaticon.com/512/129/129300.png',
	},
	{
		id: 4,
		titleUK: 'Піца',
		titleEN: 'Pizza',
		slug: 'pizza',
		imageUrl: 'https://cdn-icons-png.flaticon.com/512/599/599995.png',
	},
	{
		id: 5,
		titleUK: 'Напої',
		titleEN: 'Drinks',
		slug: 'drinks',
		imageUrl: 'https://cdn-icons-png.flaticon.com/512/3132/3132691.png',
	},
	// Subcategories for Роли
	{
		id: 6,
		titleUK: 'Гарячі роли',
		titleEN: 'Hot rolls',
		slug: 'hot-rolls',
		parentCategoryId: 2,
	},
	{
		id: 7,
		titleUK: 'Холодні роли',
		titleEN: 'Cold rolls',
		slug: 'cold-rolls',
		parentCategoryId: 2,
	},
	// Subcategories for Суші
	{
		id: 8,
		titleUK: 'Нігірі',
		titleEN: 'Nigiri',
		slug: 'nigiri',
		parentCategoryId: 3,
	},
	{
		id: 9,
		titleUK: 'Гункан',
		titleEN: 'Gunkan',
		slug: 'gunkan',
		parentCategoryId: 3,
	},
	// Subcategories for Піца
	{
		id: 10,
		titleUK: "М'ясна піца",
		titleEN: 'Meat pizza',
		slug: 'meat-pizza',
		parentCategoryId: 4,
	},
	{
		id: 11,
		titleUK: 'Вегетаріанська піца',
		titleEN: 'Vegetarian pizza',
		slug: 'vegetarian-pizza',
		parentCategoryId: 4,
	},
];

export const products = [
	// Гарячі роли (Hot rolls)
	{
		id: 1,
		titleUK: 'Рол Банзай',
		titleEN: 'Roll Banzai',
		slug: 'roll-banzai',
		price: 280,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/97/20/1729021525банзайфон.jpg',
		weight: 270,
	},
	{
		id: 2,
		titleUK: 'Бостон',
		titleEN: 'Boston',
		slug: 'boston',
		price: 300,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/20/83/1729020824бостонфон.jpg',
		weight: 340,
	},
	// Холодні роли (Cold rolls)
	{
		id: 3,
		titleUK: 'Рол Філадельфія Класік',
		titleEN: 'Philadelphia Classic',
		slug: 'philadelphia-classic',
		price: 375,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/62/bf/174403308611.jpg',
		weight: 310,
	},
	{
		id: 4,
		titleUK: 'Рол Ямато',
		titleEN: 'Yamato Roll',
		slug: 'yamato-roll',
		price: 230,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/37/5c/1729021026яматофон.jpg',
		weight: 280,
	},
	// Нігірі (Nigiri)
	{
		id: 5,
		titleUK: 'Нігірі сьомга',
		titleEN: 'Salmon Nigiri ',
		slug: 'nigiri-salmon',
		price: 43,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/92/fd/1622562660НигириСемга.png',
		weight: 35,
	},
	{
		id: 6,
		titleUK: 'Нігірі вугор',
		titleEN: 'Eel Nigiri',
		slug: 'eel-nigiri',
		price: 55,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/67/51/1622562469НигириУгорь.png',
		weight: 38,
	},
	// Гункан (Gunkan)
	{
		id: 7,
		titleUK: 'Гункан Сьомга',
		titleEN: 'Salmon Gunkan',
		slug: 'gunkan-salmon',
		price: 75,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/bb/19/1622562993ГунканСемга.png',
		weight: 45,
	},
	{
		id: 8,
		titleUK: 'Гункан вугор',
		titleEN: 'Eel Gunkan',
		slug: 'eel-gunkan',
		price: 85,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img-cache/gunkan-crab.png.webp',
		weight: 48,
	},
	// М'ясна піца (Meat pizza)
	{
		id: 9,
		titleUK: 'Піца Пепероні',
		titleEN: 'Pizza Pepperoni',
		slug: 'pizza-pepperoni',
		price: 325,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/15/60/17253073392.jpg',
		weight: 520,
	},
	{
		id: 10,
		titleUK: "Піца М'ясна",
		titleEN: 'Pizza Meat',
		slug: 'pizza-meat',
		price: 400,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/8d/f7/174410197212.jpg',
		weight: 580,
	},
	// Вегетаріанська піца (Vegetarian pizza)
	{
		id: 11,
		titleUK: 'Піца Маргарита',
		titleEN: 'Pizza Margherita',
		slug: 'pizza-margherita',
		price: 275,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/15/60/17513787622.jpg',
		weight: 450,
	},
	{
		id: 12,
		titleUK: 'Піца з грушею і горгондзолою',
		titleEN: 'Pizza with pear and gorgonzola',
		slug: 'pizza-with-pear-and-gorgonzola',
		price: 340,
		imageUrl: 'https://vilki-palki.od.ua/storage/img/f3/cc/17253070961.jpg',
		weight: 480,
	},
	// Напої (Drinks) - без підкатегорій
	{
		id: 13,
		titleUK: 'Coca-Cola',
		titleEN: 'Coca-Cola',
		slug: 'coca-cola',
		price: 40,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/b1/5f/16242801651623150280кока-кола.jpg',
		weight: 500,
	},
	{
		id: 14,
		titleUK: 'Фанта',
		titleEN: 'Fanta',
		slug: 'fanta',
		price: 40,
		imageUrl:
			'https://vilki-palki.od.ua/storage/img/47/74/16242801141623150313фанта.jpg',
		weight: 500,
	},
];
