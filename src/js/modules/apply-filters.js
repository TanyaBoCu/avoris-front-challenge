import { calculatePriceBreakdown } from './calculate-price.js';

export function applyFilters() {
  const filtersForm = document.querySelector('#filters');
  const destinationBlocks = document.querySelectorAll('.destinations-options');
  const cards = document.querySelectorAll('.card');

  if (!filtersForm || !cards.length) return;

  const getCheckedValues = (name) => {
    return [...filtersForm.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
  };

  const getValue = (name) => {
    return filtersForm.querySelector(`input[name="${name}"]`)?.value?.trim() || '';
  };

  const filterCards = () => {
    const selectedDestinations = getCheckedValues('destination');
    const selectedCategories = getCheckedValues('category');
    const selectedStays = getCheckedValues('stay');

    const minPrice = getValue('price-min');
    const maxPrice = getValue('price-max');

    cards.forEach((card) => {
      const continent = card.dataset.continent;
      const category = card.dataset.category;
      const stay = card.dataset.stay;

      const { totalAmount } = calculatePriceBreakdown(card);
      const totalPrice = totalAmount / 100;

      const matchesDestination =
        selectedDestinations.length === 0 || selectedDestinations.includes(continent);

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(category);

      const matchesStay =
        selectedStays.length === 0 || selectedStays.includes(stay);

      const matchesMinPrice =
        !minPrice || totalPrice >= Number(minPrice);

      const matchesMaxPrice =
        !maxPrice || totalPrice <= Number(maxPrice);

      const isVisible =
        matchesDestination &&
        matchesCategory &&
        matchesStay &&
        matchesMinPrice &&
        matchesMaxPrice;

      const cardItem = card.closest('.card-item');
      if (cardItem) {
        cardItem.style.display = isVisible ? '' : 'none';
      }
    });

    destinationBlocks.forEach((block) => {
      const visibleCards = [...block.querySelectorAll('.card-item')].filter(
        (item) => item.style.display !== 'none'
      );

      block.style.display = visibleCards.length ? '' : 'none';
    });
  };

  filtersForm.addEventListener('change', filterCards);
  filtersForm.addEventListener('input', filterCards);

  filterCards();
}