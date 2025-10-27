import { useLocale } from 'use-intl';
import { routing } from '@shared/lib/i18n';

export const useGetLocalesWithoutCurrent = () => {
	const currentLocale = useLocale();
	const locales = routing.locales;

	return locales.filter((locale) => locale !== currentLocale);
}