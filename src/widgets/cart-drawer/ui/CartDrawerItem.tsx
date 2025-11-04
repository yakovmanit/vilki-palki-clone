import React, { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { Title } from '@shared/ui';
import { Counter } from '@entities/product-card/ui/Counter';

interface Props {
	counterValue: number;
	setCounterValue: Dispatch<SetStateAction<number>>;
}

export const CartDrawerItem: React.FC<Props> = ({ counterValue, setCounterValue }) => {
  return (
		<div className='flex items-center gap-3 p-2 border-[2px] border-gray-200 rounded-md relative'>
			<button className='absolute right-0 top-1 w-5 h-5 text-custom-gray'>
				<X className='w-4 h-4' />
			</button>

			<div className='shrink-0 rounded-md overflow-hidden h-20 w-20'>
				<img src='https://vilki-palki.od.ua/storage/img-cache/500_500_17605291076.jpg.webp' alt='auto' />
			</div>

			<div className='w-full'>
				<p className='text-xs text-custom-gray'>Шаурма</p>
				<Title size='xs' text='Шаурма класична'/>
				<div className='flex items-center justify-between gap-1.5'>
					<p className='font-semibold' >245 UAH</p>
					<p className='text-xs text-custom-gray'>Вага: 420г</p>
					<Counter className='ml-auto' count={counterValue} setCount={setCounterValue} />
				</div>
			</div>
		</div>

	);
};
