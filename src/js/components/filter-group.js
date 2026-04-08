export function FilterGroup({
  groupClass = '',
  title,
  name,
  options = [],
  isOpen = false,
  labelledBy = ''
}) {
  return `
    <details class="c-filter-group ${groupClass}" ${isOpen ? 'open' : ''}>
      <summary class="c-filter-group__summary">
        <i class="c-filter-group__icon" aria-hidden="true"></i>
        <span>${title}</span>
      </summary>

      <div class="c-filter-group__content">
        ${labelledBy ? `<span id="${labelledBy}" class="visually-hidden">Filtrar por ${title.toLowerCase()}</span>` : ''}
        <ul class="c-filter-group__list" ${labelledBy ? `role="group" aria-labelledby="${labelledBy}"` : ''}>
          ${options.map((option) => `
            <li class="c-filter-group__item">
              <label>
                <input type="checkbox" name="${name}" value="${option.value}">
                <span class="c-filter-group__box"></span>
                <span class="c-filter-group__label">${option.label}</span>
              </label>

              <span class="c-filter-group__info-icon" tabindex="0">
                <div class="c-filter-group__info-content">
                  <p>${option.info}</p>
                </div>
              </span>
            </li>
          `).join('')}
        </ul>
      </div>
    </details>
  `;
}
