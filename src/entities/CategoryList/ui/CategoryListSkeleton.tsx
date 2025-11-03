import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CategoryListSkeleton: React.FC = () => {
	return (
		<div className='flex flex-col gap-4'>
			{
				[...new Array(6)].map((_, i) =>
					<div className='h-50' key={i}>
						<Skeleton className='h-full' />
					</div>
				)
			}
		</div>
	);
};
