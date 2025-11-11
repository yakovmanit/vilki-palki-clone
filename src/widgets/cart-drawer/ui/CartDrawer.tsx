'use client';

import { ChevronUp, CircleX } from 'lucide-react';
import React, { useRef, useState } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { useCart } from '@shared/hooks';
import { cn } from '@shared/lib';
import { Button, Container, Title } from '@shared/ui';

import { CartDrawerItem } from './CartDrawerItem';

export const CartDrawer: React.FC = () => {
	const { cartItems, isLoading, cartTotalAmount } = useCart();

	const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	const handleCartDrawerOpen = () => {
		if (!ref.current) return;

		setIsCartDrawerOpen(true);
		disableBodyScroll(ref.current);
	};

	const handleCartDrawerClose = () => {
		if (!ref.current) return;

		setIsCartDrawerOpen(false);
		enableBodyScroll(ref.current);
	};

	return (
		<div>
			<div className='flex justify-between items-center fixed left-0 bottom-0 w-full bg-primary text-white p-3 z-30'>
				<div
					onClick={() =>
						isCartDrawerOpen ? handleCartDrawerClose() : handleCartDrawerOpen()
					}
					ref={ref}
				>
					<button>
						<ChevronUp
							className={cn(
								'w-8 h-8 text-custom-gray transition duration-300 ease-in-out',
								{
									'transform rotate-180': !isCartDrawerOpen,
								},
							)}
						/>
					</button>
				</div>

				<div className='flex justify-between items-center gap-3'>
					<div className='text-right'>
						<p className='text-xs text-custom-gray'>До сплати</p>
						<p className='text-xl font-semibold'>{cartTotalAmount} UAH</p>
					</div>

					<Button>Оформлення</Button>
				</div>
			</div>

			{/* Cart Drawer */}
			<div
				className={cn(
					'pb-20 bg-white fixed z-20 top-0 left-0 w-full h-full overflow-y-auto transition duration-300 ease-in-out md:w-[500px] mt-[54px]',
					{
						'transform translate-y-full': !isCartDrawerOpen,
					},
				)}
			>
				<Container>
					{/* Cart Drawer Header */}
					<div className='flex justify-between items-center'>
						<Title text='Кошик' size='lg' />

						<button onClick={() => handleCartDrawerClose()}>
							<CircleX strokeWidth={1} className='text-custom-gray h-9 w-9' />
						</button>
					</div>

					{/* Cart Drawer Body */}
					<div className='flex flex-col gap-3'>
						{/* Cart Items */}
						{/* TODO: add cart item skeleton */}
						{isLoading ? (
							<p>Loading...</p>
						) : (
							cartItems?.map((item) => (
								<CartDrawerItem
									key={item.cartItemId}
									cartItemId={item.cartItemId}
									categoryName={item.categoryName}
									productName={item.titleUK}
									price={item.price}
									weight={item.weight}
									imageUrl={item.imageUrl}
									ingredients={item.ingredients}
									quantity={item.quantity}
								/>
							))
						)}
					</div>
				</Container>
			</div>
		</div>
	);
};
