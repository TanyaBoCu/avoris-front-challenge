import { heroSlides } from '../../data/hero-slides.js';

export function HeroCarousel() {
  return `
    <section id="hero-carousel" class="hero-carousel" aria-label="Promoción destacada">
      <div class="slides" aria-live="off">
        ${heroSlides.map((slide, index) => `
          <img
            src="${slide.image}"
            alt="${slide.alt}"
            class="slide ${index === 0 ? 'is-active' : ''}"
            ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
            decoding="async"
          >
        `).join('')}
      </div>

      <div class="overlay">
        <div class="titles-cont">
          <h1 class="title1">Ruta por Australia</h1>
          <p class="subtitle">Si te va la aventura, no te lo puedes perder</p>
        </div>

        <a href="#mas-info" class="more-info">Más información</a>
      </div>

      <button class="nav prev" type="button" aria-label="Anterior">
        <i class="arrow-icon" aria-hidden="true"></i>
      </button>

      <button class="nav next" type="button" aria-label="Siguiente">
        <i class="arrow-icon" aria-hidden="true"></i>
      </button>

      <div class="dots" role="tablist" aria-label="Diapositivas"></div>
    </section>
  `;
}