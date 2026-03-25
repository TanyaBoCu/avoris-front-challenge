import { calculatePriceBreakdown } from './calculate-price.js';

export function initPricePopover() {
  const popover = document.querySelector('#price-popover');
  if (!popover) return;

  const closeButton = popover.querySelector('.price-popover__close');
  const destinationField = popover.querySelector('[data-popover-destination]');
  const regionField = popover.querySelector('[data-popover-region]');
  const daysField = popover.querySelector('[data-popover-days]');
  const baseField = popover.querySelector('[data-popover-base]');
  const ivaField = popover.querySelector('[data-popover-iva]');
  const totalField = popover.querySelector('[data-popover-total]');

  const openPopover = (trigger, card) => {
    const { days, formattedBase, formattedIva, formattedTotal } = calculatePriceBreakdown(card);

    const country = card.querySelector('[data-country]')?.textContent || '';
    const region = card.querySelector('[data-region]')?.textContent || '';

    if (destinationField) destinationField.textContent = country;
    if (regionField) regionField.textContent = region;
    if (daysField) daysField.textContent = `${days} día${days > 1 ? 's' : ''}`;
    if (baseField) baseField.textContent = formattedBase;
    if (ivaField) ivaField.textContent = formattedIva;
    if (totalField) totalField.textContent = formattedTotal;

    const rect = trigger.getBoundingClientRect();
    const panelWidth = 480;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = rect.left;
    let top = rect.bottom + 12;

    if (left + panelWidth > viewportWidth - 16) {
      left = viewportWidth - panelWidth - 16;
    }

    if (left < 16) {
      left = 16;
    }

    if (top > viewportHeight - 120) {
      top = Math.max(16, rect.top - 260);
    }

    popover.style.setProperty('--popover-top', `${top}px`);
    popover.style.setProperty('--popover-left', `${left}px`);

    popover.classList.add('is-open');
    popover.setAttribute('aria-hidden', 'false');
  };

  const closePopover = () => {
    popover.classList.remove('is-open');
    popover.setAttribute('aria-hidden', 'true');
  };

  document.addEventListener('click', (event) => {
    const breakdownLink = event.target.closest('.breakdown');

    if (breakdownLink) {
      event.preventDefault();
      const card = breakdownLink.closest('.card');
      if (!card) return;

      openPopover(breakdownLink, card);
      return;
    }

    if (event.target === popover) {
      closePopover();
    }
  });

  closeButton?.addEventListener('click', closePopover);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopover();
    }
  });
}