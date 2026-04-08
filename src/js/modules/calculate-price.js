import { formatPrice } from '../utils/format-price.js';

function getSelectedDays() {
  const startInput = document.querySelector('input[name="date-start"]');
  const endInput = document.querySelector('input[name="date-end"]');

  const startValue = startInput?.value;
  const endValue = endInput?.value;

  if (!startValue || !endValue) return null;

  const startDate = new Date(startValue);
  const endDate = new Date(endValue);

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return null;

  const diffMs = endDate - startDate;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 1;

  return diffDays;
}

export function calculatePriceBreakdown(cardElement) {
  const pricePerDay = Number(cardElement.dataset.pricePerDay || 0);
  const fixedFee = Number(cardElement.dataset.fixedFee || 0);
  const defaultDays = Number(cardElement.dataset.daysDefault || 1);
  const selectedDays = getSelectedDays();
  const days = selectedDays || defaultDays;

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
  const cards = document.querySelectorAll('.c-card');

  cards.forEach((card) => {
    const priceDisplay = card.querySelector('[data-price-display]');
    const daysDisplay = card.querySelector('[data-days]');

    if (!priceDisplay) return;

    const { days, formattedTotal } = calculatePriceBreakdown(card);

    priceDisplay.innerHTML = formattedTotal.replace('€', '&nbsp;€');

    if (daysDisplay) {
      daysDisplay.textContent = String(days);
    }
  });
}

export function initPriceUpdates() {
  const filtersForm = document.querySelector('#filters');
  if (!filtersForm) return;

  const refreshPrices = () => {
    updateCardDisplayedPrices();
  };

  filtersForm.addEventListener('change', refreshPrices);
  filtersForm.addEventListener('input', refreshPrices);

  refreshPrices();
}
