export function FilterGroup({
  groupClass = '',
  title,
  name,
  options = [],
  isOpen = false,
  labelledBy = ''
}) {
  return `
    <details class="filter-group ${groupClass}" ${isOpen ? 'open' : ''}>
      <summary class="filter-summary">
        <i class="icon" aria-hidden="true"></i>
        <span>${title}</span>
      </summary>

      <div class="filter-content">
        <ul class="checklist" ${labelledBy ? `role="group" aria-labelledby="${labelledBy}"` : ''}>
          ${labelledBy ? `<span id="${labelledBy}" class="visually-hidden">Filtrar por ${title.toLowerCase()}</span>` : ''}

          ${options.map((option) => `
            <li class="check">
              <label>
                <input type="checkbox" name="${name}" value="${option.value}">
                <span class="box"></span>
                <span class="label">${option.label}</span>
              </label>

              <span class="icon-info" tabindex="0">
                <div class="info-check">
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