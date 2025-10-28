import React from 'react';
import { CategoryList, Title } from '@shared/ui';

interface Props {
	className?: string;
}

export const CategorySection: React.FC<Props> = ({ className }) => {
  return (
		<section className={className}>
			<Title className='pl-4 mt-6' size='lg' text='Меню' />
			<p className='pl-4 mb-8'>Обери категорію</p>

			<CategoryList isHomeElement={true} />
		</section>
  );
};
