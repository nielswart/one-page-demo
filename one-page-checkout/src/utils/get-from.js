export const getFrom = (
  variants = [],
  { currency_code = "zar", tax_rate = 15 }
) => {
  const prices = [];

  for (const variant of variants) {
    const price = variant.prices.find((p) => p.currency_code === currency_code);
    if (price) {
      prices.push(price.amount);
    }
  }
  const min = Math.min(...prices);

  return `From ${
    (min / 100) * (1 + tax_rate / 100)
  } ${currency_code.toUpperCase()}`;
};
