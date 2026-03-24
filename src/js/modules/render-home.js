import { Header } from '../components/header';
import { HeroCarousel } from '../components/hero-carousel';
import { FiltersPanel } from '../components/filters-panel';
import { PricePopover } from '../components/price-popover';
import { Footer } from '../components/footer';

export function renderHome() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <a class="skip-link" href="#main">Saltar al contenido</a>
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
}