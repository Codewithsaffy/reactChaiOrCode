const CURRENCY_FORMATOR = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(num: number) {
  return CURRENCY_FORMATOR.format(num);
}
