'use client';

import Image from 'next/image';
import { Button, Container, Title } from '@shared/ui';
import { Counter } from '@entities/product-card/ui/Counter';
import { useState } from 'react';

const ProductPage = () => {
	const [count, setCount] = useState(1);

	return (
		<div>
			{/* Main image */}
			<div>
				<Image alt={'Auto'} src={'https://vilki-palki.od.ua/storage/img/df/ee/1762345704нігірігребінецьфон.jpg'} width={500} height={500} />
			</div>

			<Container>
				<Title text={'Гункан гребінець'} size={'md'} className='mt-8 mb-4' />

				<div className='text-xl font-bold'>
					Ціна 75 UAH
				</div>

				{/* Counter & ATC btn */}
				<div className='flex items-center gap-4 my-12'>
					<Counter isPDPCounter={true} count={count} setCount={setCount} />

					<Button className='text-sm h-10 py-0'>
						Додати в кошик
					</Button>
				</div>

				{/* Description */}
				<div className='py-12 border-t border-b border-gray-200 flex flex-col gap-4'>
					<p className='text-gray-500'>
						Вага: 45г, Калорійність: 120 ккал, Білки: 8г, Жири: 5г, Вуглеводи: 10г
					</p>

					<p className='text-gray-500'>
						Опис: Гункан з ніжним гребінцем, свіжим авокадо та ікрою тобіко. Ідеальний вибір для любителів морепродуктів.
					</p>
				</div>

				{/* Ingredients */}
				<div className='my-12'>
					<Title size='xs' className='text-custom-gray mb-8' text={'Склад:'} />

					<ul className='grid grid-cols-3 gap-4'>
						<li className='bg-gray-50 rounded-md flex flex-col items-center p-4'>
							<Image alt={'auto'} src={'https://vilki-palki.od.ua/storage/img-cache/16629808017-removebg-preview.png.webp'} width={70} height={70} />

							<p className='text-custom-gray text-sm'>Гребінець</p>
						</li>
					</ul>
				</div>
			</Container>

			{/* Form */}
			<div className='relative py-5'>
				<Image className='absolute w-full h-full top-0 left-0 object-cover' alt={'auto'} src={'https://vilki-palki.od.ua/_nuxt/img/footer_subscr.f8aedce.jpg'} width={800} height={800} />

				<Container className='relative z-10'>
					<Container className='bg-white rounded-xl py-5'>
						<Title className='text-custom-blue mb-3' text={'Підпишіться на наші новини та акції!'} size={'sm'} />

						<p className='text-sm text-custom-gray mb-6'>Щоб отримувати бонуси та промокоди</p>

						<form className='flex flex-col sm:flex-row gap-6'>
							<div className='relative'>
								<label className='absolute top-2 left-4 text-custom-gray text-sm'>ваше ім'я</label>
								<input className='w-full px-4 pt-8 pb-2 rounded-xl overflow-hidden font-semibold text-xl outline-1 outline-custom-gray focus-visible:outline-1 focus-visible:outline-pink-300' type='email' />
							</div>

							<div className='relative'>
								<label className='absolute top-2 left-4 text-custom-gray text-sm'>ваш gmail</label>
								<input className='w-full px-4 pt-8 pb-2 rounded-xl overflow-hidden font-semibold text-xl outline-1 outline-custom-gray focus-visible:outline-1 focus-visible:outline-pink-300' type='email' />
							</div>

							<Button className='h-16' type='submit'>
								Підписатися
							</Button>

							<div>
								<input type="checkbox" id='policy' />
								<label htmlFor='policy' className='pl-2 text-sm text-custom-gray'>
									Я погоджуюсь з політикою конфіденційності
								</label>
							</div>
						</form>
					</Container>
				</Container>
			</div>
		</div>
	);
};

export default ProductPage;
