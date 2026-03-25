export function formatPrice(value, currency = 'EUR') {
  const amount = Number(value) / 100;

  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}