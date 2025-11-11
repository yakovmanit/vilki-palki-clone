import React from 'react';

import { cn } from '@shared/lib';

interface Props {
	count: number;
	isPopupCounter?: boolean;
	handleUpdateCartItem?: (type: 'plus' | 'minus') => void;
	setCount?: React.Dispatch<React.SetStateAction<number>>;
	className?: string;
}

export const Counter: React.FC<Props> = ({
	className,
	count,
	isPopupCounter = false,
	handleUpdateCartItem,
	setCount,
}) => {
	const iconSize = isPopupCounter ? 24 : 16;

	const handleDecrement = () => {
		if (setCount) {
			setCount(prev => Math.max(1, prev - 1));
		} else {
			handleUpdateCartItem?.('minus');
		}
	};

	const handleIncrement = () => {
		if (setCount) {
			setCount(prev => prev + 1);
		} else {
			handleUpdateCartItem?.('plus');
		}
	};

	return (
		<div
			className={cn(
				'flex items-center gap-2 border border-gray-300 w-fit rounded-lg',
				className,
			)}
		>
			<button onClick={handleDecrement} className='p-1'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={iconSize}
					height={iconSize}
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

			<button onClick={handleIncrement} className='p-1'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={iconSize}
					height={iconSize}
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
