import { heroSlides } from '../../data/hero-slides.js';

export function HeroCarousel() {
  return `
    <section id="hero-carousel" class="c-hero" aria-label="Promoción destacada">
      <div class="c-hero__slides" aria-live="off">
        ${heroSlides.map((slide, index) => `
          <img
            src="${slide.image}"
            alt="${slide.alt}"
            class="c-hero__slide ${index === 0 ? 'is-active' : ''}"
            ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
            decoding="async"
          >
        `).join('')}
      </div>

      <div class="c-hero__overlay">
        <div class="c-hero__content">
          <h1 class="c-hero__title">Ruta por Australia</h1>
          <p class="c-hero__subtitle">Si te va la aventura, no te lo puedes perder</p>
        </div>

        <a href="#mas-info" class="c-hero__link">Más información</a>
      </div>

      <button class="c-hero__nav c-hero__nav--prev" type="button" aria-label="Anterior">
        <i class="c-hero__arrow" aria-hidden="true"></i>
      </button>

      <button class="c-hero__nav c-hero__nav--next" type="button" aria-label="Siguiente">
        <i class="c-hero__arrow" aria-hidden="true"></i>
      </button>

      <div class="c-hero__dots" role="tablist" aria-label="Diapositivas"></div>
    </section>
  `;
}
