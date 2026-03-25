export function initHeroCarousel() {
  const hero = document.querySelector('.hero-carousel');
  if (!hero) return;

  const slides = [...hero.querySelectorAll('.slide')];
  const prevButton = hero.querySelector('.nav.prev');
  const nextButton = hero.querySelector('.nav.next');
  const dotsContainer = hero.querySelector('.dots');

  if (!slides.length || !dotsContainer || !prevButton || !nextButton) return;

  let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (currentIndex < 0) currentIndex = 0;

  const renderDots = () => {
    dotsContainer.innerHTML = slides
      .map(
        (_, index) => `
          <button
            class="dot ${index === currentIndex ? 'is-active' : ''}"
            type="button"
            aria-label="Ir a la diapositiva ${index + 1}"
            aria-selected="${index === currentIndex ? 'true' : 'false'}"
          ></button>
        `
      )
      .join('');
  };

  const updateSlides = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === currentIndex);
    });

    const dots = [...dotsContainer.querySelectorAll('.dot')];
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
      dot.setAttribute('aria-selected', String(index === currentIndex));
    });
  };

  const goToSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    updateSlides();
  };

  const goToNext = () => goToSlide(currentIndex + 1);
  const goToPrev = () => goToSlide(currentIndex - 1);

  renderDots();
  updateSlides();

  prevButton.addEventListener('click', goToPrev);
  nextButton.addEventListener('click', goToNext);

  dotsContainer.addEventListener('click', (event) => {
    const dot = event.target.closest('.dot');
    if (!dot) return;

    const dots = [...dotsContainer.querySelectorAll('.dot')];
    const dotIndex = dots.indexOf(dot);
    if (dotIndex >= 0) goToSlide(dotIndex);
  });

  let autoplay = setInterval(goToNext, 5000);

  hero.addEventListener('mouseenter', () => clearInterval(autoplay));
  hero.addEventListener('mouseleave', () => {
    autoplay = setInterval(goToNext, 5000);
  });
}