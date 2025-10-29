import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'uk'],
	defaultLocale: 'uk',
	localePrefix: 'as-needed', // to not show locale prefix for the default locale in the URL
	localeDetection: false, // disable automatic locale detection from browser headers
});
