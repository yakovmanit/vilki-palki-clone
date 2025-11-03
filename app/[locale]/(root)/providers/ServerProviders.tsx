import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

export const ServerProviders: React.FC<Props> = ({
	 children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<NextIntlClientProvider>
				{children}
			</NextIntlClientProvider>
		</>
	);
};
