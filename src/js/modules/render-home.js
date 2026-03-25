import { destinations } from '../../data/destinations.js';
import { DestinationList } from '../components/destination-list.js';
import { Footer } from '../components/footer.js';
import { FiltersPanel } from '../components/filters-panel.js';
import { Header } from '../components/header.js';
import { HeroCarousel } from '../components/hero-carousel.js';
import { PricePopover } from '../components/price-popover.js';
import { accessibility } from './accessibility.js';
import { applyFilters } from './apply-filters.js';
import { initPricePopover } from './price-popover.js';
import { updateCardDisplayedPrices } from './calculate-price.js';
import { initHeroCarousel } from './hero-carousel.js';

export function renderHome() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    ${Header()}
    <main id="main" tabindex="-1">
      ${HeroCarousel()}
      <section id="destinations-cards" class="select-cards">
        <div class="titles-sections">
          <h2>Vive tus propias aventuras</h2>
          <h3>Para los que les gusta explorar y conocer mundo sin complejos</h3>
        </div>

        <div class="filters-destinations">
          ${FiltersPanel()}
          <div class="all-info" id="destinations-sections"></div>
        </div>

        ${PricePopover()}
      </section>
    </main>
    ${Footer()}
  `;

  const destinationsSections = document.querySelector('#destinations-sections');

  const africaItems = destinations.filter((item) => item.continent === 'africa');
  const northAmericaItems = destinations.filter((item) => item.continent === 'namerica');
  const asiaItems = destinations.filter((item) => item.continent === 'asia');
  const europeItems = destinations.filter((item) => item.continent === 'europa');

  destinationsSections.innerHTML = `
    ${DestinationList('África', 'africa', africaItems)}
    ${DestinationList('América del Norte', 'namerica', northAmericaItems)}
    ${DestinationList('Asia', 'asia', asiaItems)}
    ${DestinationList('Europa', 'europa', europeItems)}
  `;

  updateCardDisplayedPrices();
  applyFilters();
  accessibility();
  initPricePopover();
  initHeroCarousel();
}