export function accessibility() {
  const navToggle = document.querySelector('.c-header__toggle');
  const primaryNav = document.querySelector('.c-header__nav');
  const filtersToggle = document.querySelector('.c-filters-panel__toggle');
  const filtersDrawer = document.querySelector('#filters-drawer');
  const filtersClose = document.querySelector('.c-filters-panel__close');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.dataset.open = String(!isExpanded);
    });
  }

  if (filtersToggle && filtersDrawer) {
    filtersToggle.addEventListener('click', () => {
      const isExpanded = filtersToggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      filtersToggle.setAttribute('aria-expanded', String(nextState));
      filtersDrawer.dataset.open = String(nextState);

      const label = filtersToggle.querySelector('.c-filters-panel__toggle-label');
      if (label) {
        label.textContent = nextState
          ? filtersToggle.dataset.openText
          : filtersToggle.dataset.closedText;
      }
    });
  }

  if (filtersClose && filtersToggle && filtersDrawer) {
    filtersClose.addEventListener('click', () => {
      filtersToggle.setAttribute('aria-expanded', 'false');
      filtersDrawer.dataset.open = 'false';

      const label = filtersToggle.querySelector('.c-filters-panel__toggle-label');
      if (label) {
        label.textContent = filtersToggle.dataset.closedText;
      }
    });
  }

  window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 10);
  });
}
