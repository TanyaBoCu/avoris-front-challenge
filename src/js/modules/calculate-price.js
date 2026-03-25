import { formatPrice } from '../utils/format-price.js';

export function calculatePriceBreakdown(cardElement) {
  const pricePerDay = Number(cardElement.dataset.pricePerDay || 0);
  const fixedFee = Number(cardElement.dataset.fixedFee || 0);
  const days = Number(cardElement.dataset.daysDefault || 1);
  const iva = Number(cardElement.dataset.iva || 0);
  const currency = cardElement.dataset.currency || 'EUR';

  const baseAmount = (pricePerDay * days) + fixedFee;
  const ivaAmount = Math.round(baseAmount * (iva / 100));
  const totalAmount = baseAmount + ivaAmount;

  return {
    days,
    currency,
    baseAmount,
    ivaAmount,
    totalAmount,
    formattedBase: formatPrice(baseAmount, currency),
    formattedIva: formatPrice(ivaAmount, currency),
    formattedTotal: formatPrice(totalAmount, currency)
  };
}

export function updateCardDisplayedPrices() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const priceDisplay = card.querySelector('[data-price-display]');

    if (!priceDisplay) return;

    const { formattedTotal } = calculatePriceBreakdown(card);
    priceDisplay.innerHTML = formattedTotal.replace('€', '&nbsp;€');
  });
}