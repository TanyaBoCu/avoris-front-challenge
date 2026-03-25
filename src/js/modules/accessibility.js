export function accessibility() {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  const filtersToggle = document.querySelector('.filters-toggle');
  const filtersDrawer = document.querySelector('#filters-drawer');
  const filtersClose = document.querySelector('.filters-close');

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

      const label = filtersToggle.querySelector('.label');
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

      const label = filtersToggle.querySelector('.label');
      if (label) {
        label.textContent = filtersToggle.dataset.closedText;
      }
    });
  }

  window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 10);
  });
}