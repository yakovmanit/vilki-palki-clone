'use client';

import React from 'react';
import { store } from '@shared/redux/store';
import { Provider } from 'react-redux';

export const ClientProviders: React.FC<Props> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<Provider store={store}>
				{children}
			</Provider>
		</>
	);
};
