import { Header } from '../components/header.js';
import { HeroCarousel } from '../components/hero-carousel.js';

import { Footer } from '../components/footer.js';

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
          
          <div class="all-info" id="destinations-sections"></div>
        </div>

        
      </section>
    </main>
    ${Footer()}
  `;
}