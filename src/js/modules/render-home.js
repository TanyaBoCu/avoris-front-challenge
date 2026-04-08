import { destinations } from '../../data/destinations.js';
import { DestinationList } from '../components/destination-list.js';
import { FiltersPanel } from '../components/filters-panel.js';
import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';
import { HeroCarousel } from '../components/hero-carousel.js';
import { PricePopover } from '../components/price-popover.js';

import { accessibility } from './accessibility.js';
import { applyFilters } from './apply-filters.js';
import { initHeroCarousel } from './hero-carousel.js';
import { initPricePopover } from './price-popover.js';
import { initPriceUpdates } from './calculate-price.js';

function getDestinationsByContinent(continent) {
  return destinations.filter((item) => item.continent === continent);
}

function renderDestinationSections() {
  const destinationsSections = document.querySelector('#destinations-sections');
  if (!destinationsSections) return;

  const sections = [
    {
      title: 'África',
      group: 'africa',
      items: getDestinationsByContinent('africa')
    },
    {
      title: 'América del Norte',
      group: 'namerica',
      items: getDestinationsByContinent('namerica')
    },
    {
      title: 'Asia',
      group: 'asia',
      items: getDestinationsByContinent('asia')
    },
    {
      title: 'Europa',
      group: 'europa',
      items: getDestinationsByContinent('europa')
    }
  ];

  destinationsSections.innerHTML = sections
    .map((section) => DestinationList(section.title, section.group, section.items))
    .join('');
}

function initHomeModules() {
  initPriceUpdates();
  applyFilters();
  accessibility();
  initPricePopover();
  initHeroCarousel();
}

function getHomeTemplate() {
  return `
    ${Header()}
    <main id="main" tabindex="-1">
      ${HeroCarousel()}
      <section id="destinations-cards" class="c-destinations-section">
        <div class="o-section-heading">
          <h2 class="o-section-heading__title">Vive tus propias aventuras</h2>
          <h3 class="o-section-heading__subtitle">Para los que les gusta explorar y conocer mundo sin complejos</h3>
        </div>

        <div class="o-sidebar-layout">
          ${FiltersPanel()}
          <div class="o-stack" id="destinations-sections"></div>
        </div>

        ${PricePopover()}
      </section>
    </main>
    ${Footer()}
  `;
}

export function renderHome() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = getHomeTemplate();

  renderDestinationSections();
  initHomeModules();
}
