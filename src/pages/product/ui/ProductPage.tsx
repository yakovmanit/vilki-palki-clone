'use client';

import Image from 'next/image';
import { Button, Container, Title } from '@shared/ui';
import { Counter } from '@entities/product-card/ui/Counter';

const ProductPage = () => {
	return (
		<div>
			{/* Main image */}
			<div>
				<Image alt={'Auto'} src={'https://vilki-palki.od.ua/storage/img/df/ee/1762345704нігірігребінецьфон.jpg'} width={500} height={500} />
			</div>

			<Container>
				<Title text={'Гункан гребінець'} size={'lg'} className={'my-4'} />

				<div>
					Ціна - 75 UAH
				</div>

				{/* Counter & ATC btn */}
				<div>
					<Counter count={1} />

					<Button>
						Додати в кошик
					</Button>
				</div>

				{/* Description */}
				<div>
					<p>
						Вага: 45г, Калорійність: 120 ккал, Білки: 8г, Жири: 5г, Вуглеводи: 10г
					</p>

					<p>
						Опис: Гункан з ніжним гребінцем, свіжим авокадо та ікрою тобіко. Ідеальний вибір для любителів морепродуктів.
					</p>
				</div>

				{/* Ingredients */}
				<div>
					<Title text={'Склад:'} />

					<ul>
						<li>
							<Image alt={'auto'} src={'https://vilki-palki.od.ua/storage/img-cache/16629808017-removebg-preview.png.webp'} width={70} height={70} />

							<p>Гребінець</p>
						</li>
					</ul>
				</div>
			</Container>

			{/* Form */}
			<div>
				<Image alt={'auto'} src={'https://vilki-palki.od.ua/_nuxt/img/footer_subscr.f8aedce.jpg'} width={70} height={70} />

				<Container>
					<Title text={'Підпишіться на наші новини та акції!'} size={'lg'} className={'my-4'} />

					<p>Щоб отримувати бонуси та промокоди</p>

					<form>
						<div>
							<label>Ваше ім'я</label>
							<input type='email' />
						</div>

						<div>
							<label>Ваш email</label>
							<input type='email' placeholder='Ваш email' />
						</div>

						<Button type='submit'>
							Підписатися
						</Button>
					</form>
				</Container>
			</div>
		</div>
	);
};

export default ProductPage;
