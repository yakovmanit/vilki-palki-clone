'use client';

import React, { Dispatch, SetStateAction } from 'react';

import { cn } from '@shared/lib';
import { useUpdateCartItemMutation } from '@shared/redux';

interface Props {
	setCount: Dispatch<SetStateAction<number>>;
	count: number;
	isPopupCounter?: boolean;
	itemId?: number;
	className?: string;
}

export const Counter: React.FC<Props> = ({
	className,
	setCount,
	count,
	isPopupCounter = false,
	itemId,
}) => {
	const [updateCartItem] = useUpdateCartItemMutation();

	const handleUpdateCartItem = async (type: 'minus' | 'plus') => {
		if (!itemId) return;

		if (type === 'minus') {
			setCount((prev) => (prev > 1 ? prev - 1 : 1))

			await updateCartItem({
				id: itemId,
				quantity: count - 1
			});
		} else {
			setCount((prev) => prev + 1)

			await updateCartItem({
				id: itemId,
				quantity: count + 1
			});
		}
	}

	return (
		<div
			className={cn(
				'flex items-center gap-2 border border-gray-300 w-fit rounded-lg',
				className,
			)}
		>
			<button
				onClick={() => handleUpdateCartItem('minus')}
				className='p-1'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={isPopupCounter ? 24 : 16}
					height={isPopupCounter ? 24 : 16}
					viewBox='0 0 24 24'
					fill='none'
					stroke='#99a1af'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-minus-icon lucide-minus'
				>
					<path d='M5 12h14' />
				</svg>
			</button>

			<span
				className={cn('text-xs font-semibold', { 'text-md': isPopupCounter })}
			>
				{count}
			</span>

			<button onClick={() => handleUpdateCartItem('plus')} className='p-1'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={isPopupCounter ? 24 : 16}
					height={isPopupCounter ? 24 : 16}
					viewBox='0 0 24 24'
					fill='none'
					stroke='#99a1af'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-plus-icon lucide-plus'
				>
					<path d='M5 12h14' />
					<path d='M12 5v14' />
				</svg>
			</button>
		</div>
	);
};
