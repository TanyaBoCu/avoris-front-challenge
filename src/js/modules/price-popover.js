import { calculatePriceBreakdown } from './calculate-price.js';

export function initPricePopover() {
  const popover = document.querySelector('#price-popover');
  const closeButton = document.querySelector('.price-popover__close');
  const breakdownLinks = document.querySelectorAll('.breakdown');

  if (!popover || !breakdownLinks.length) return;

  const destinationField = popover.querySelector('[data-popover-destination]');
  const regionField = popover.querySelector('[data-popover-region]');
  const daysField = popover.querySelector('[data-popover-days]');
  const baseField = popover.querySelector('[data-popover-base]');
  const ivaField = popover.querySelector('[data-popover-iva]');
  const totalField = popover.querySelector('[data-popover-total]');

  const openPopover = (event, card) => {
    event.preventDefault();

    const { days, formattedBase, formattedIva, formattedTotal } = calculatePriceBreakdown(card);

    const country = card.querySelector('[data-country]')?.textContent || '';
    const region = card.querySelector('[data-region]')?.textContent || '';

    if (destinationField) destinationField.textContent = country;
    if (regionField) regionField.textContent = region;
    if (daysField) daysField.textContent = `${days} día${days > 1 ? 's' : ''}`;
    if (baseField) baseField.textContent = formattedBase;
    if (ivaField) ivaField.textContent = formattedIva;
    if (totalField) totalField.textContent = formattedTotal;

    popover.classList.add('is-open');
    popover.setAttribute('aria-hidden', 'false');

    const rect = event.currentTarget.getBoundingClientRect();
    popover.style.setProperty('--popover-top', `${rect.bottom + window.scrollY + 12}px`);
    popover.style.setProperty('--popover-left', `${rect.left + window.scrollX}px`);
  };

  const closePopover = () => {
    popover.classList.remove('is-open');
    popover.setAttribute('aria-hidden', 'true');
  };

  breakdownLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const card = event.currentTarget.closest('.card');
      if (!card) return;

      openPopover(event, card);
    });
  });

  closeButton?.addEventListener('click', closePopover);

  popover.addEventListener('click', (event) => {
    if (event.target === popover) {
      closePopover();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopover();
    }
  });
}