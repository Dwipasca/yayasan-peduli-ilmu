export const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const currencyRates: Record<string, number> = {
  IDR: 1,
  USD: 1 / 15500, // example: 1 USD = 15,500 IDR
  SAR: 1 / 4100, // example: 1 SAR = 4,100 IDR
  AED: 1 / 4300, // example: 1 AED = 4,300 IDR
};

export function formatCurrency(amount: number, locale: string, currency: string) {
  const rate = currencyRates[currency] ?? 1;
  const convertedAmount = amount * rate;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convertedAmount);
}

export const formatDate = (date?: string | Date | null, locale = 'id') => {
  if (!date) return '-';
  const parsed = new Date(date);
  return parsed.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export function formatCurrencyByLocale(amount: number, locale: string): string {
  const isArabic = locale === 'ar';
  const currency = locale === 'id' ? 'IDR' : 'USD';
  const isIDR = currency === 'IDR';

  const formatter = new Intl.NumberFormat(isArabic ? 'en' : locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    ...(isIDR && {
      // if it's IDR, remove all decimal digits
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
  });

  return formatter.format(amount);
}
