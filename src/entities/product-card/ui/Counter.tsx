import { Minus, Plus } from 'lucide-react';
import React from 'react';

import { cn } from '@shared/lib';

interface Props {
	count: number;
	isPopupCounter?: boolean;
	handleUpdateCartItem?: (type: 'plus' | 'minus') => void;
	setCount?: React.Dispatch<React.SetStateAction<number>>;
	isPDPCounter?: boolean;
	className?: string;
}

export const Counter: React.FC<Props> = ({
	className,
	count,
	isPopupCounter = false,
	handleUpdateCartItem,
	isPDPCounter,
	setCount,
}) => {
	const handleDecrement = () => {
		if (setCount) {
			setCount((prev) => Math.max(1, prev - 1));
		} else {
			handleUpdateCartItem?.('minus');
		}
	};

	const handleIncrement = () => {
		if (setCount) {
			setCount((prev) => prev + 1);
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
				<Minus className={cn('', { 'text-gray-400': isPDPCounter })} strokeWidth={2.2} />
			</button>

			<span
				className={cn('text-xs font-semibold', {
					'text-md': isPopupCounter,
					'text-lg': isPDPCounter
				})}
			>
				{count}
			</span>

			<button onClick={handleIncrement} className='p-1'>
				<Plus className={cn('text-gr', { 'text-gray-400': isPDPCounter })} strokeWidth={2.2} />
			</button>
		</div>
	);
};
