'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@shared/redux/store';

export const ClientProviders: React.FC<Props> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};
