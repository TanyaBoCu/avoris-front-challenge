import { filters } from '../../data/filters.js';
import { FilterGroup } from './filter-group.js';

export function FiltersPanel() {
  return `
    <div class="c-filters-panel" id="filters-drawer">
      <button class="c-filters-panel__close" type="button" aria-label="Cerrar filtros">&times;</button>

      <form class="c-filters-panel__form" id="filters" novalidate>
        <h4 class="c-filters-panel__title">Filtrar mi b&uacute;squeda</h4>

        ${FilterGroup({
          groupClass: 'c-filter-group--destinations',
          title: 'Destinos',
          name: 'destination',
          options: filters.destinations,
          labelledBy: 'destinos-label'
        })}

        ${FilterGroup({
          groupClass: 'c-filter-group--adventure',
          title: 'Aventura',
          name: 'category',
          options: filters.categories,
          isOpen: true
        })}

        ${FilterGroup({
          groupClass: 'c-filter-group--accommodation',
          title: 'Alojamiento',
          name: 'stay',
          options: filters.stays
        })}

        <details class="c-filter-group c-filter-group--price" open>
          <summary class="c-filter-group__summary">
            <i class="c-filter-group__icon" aria-hidden="true"></i>
            <span>Precio</span>
          </summary>

          <div class="c-filter-group__content c-filters-panel__price-fields">
            <label class="c-filters-panel__pill-input">
              <span class="c-filters-panel__pill-icon" aria-hidden="true"></span>
              <input type="number" inputmode="numeric" name="price-min" placeholder="M&iacute;nimo" min="0" step="1">
            </label>

            <label class="c-filters-panel__pill-input">
              <span class="c-filters-panel__pill-icon" aria-hidden="true"></span>
              <input type="number" inputmode="numeric" name="price-max" placeholder="M&aacute;ximo" min="0" step="1">
            </label>
          </div>
        </details>

        <details class="c-filter-group c-filter-group--dates" open>
          <summary class="c-filter-group__summary">
            <i class="c-filter-group__icon" aria-hidden="true"></i>
            <span>Fechas</span>
          </summary>

          <div class="c-filter-group__content c-filters-panel__dates">
            <label class="c-filters-panel__date-field">
              <span>Desde</span>
              <input type="date" name="date-start">
            </label>

            <label class="c-filters-panel__date-field">
              <span>Hasta</span>
              <input type="date" name="date-end">
            </label>
          </div>
        </details>
      </form>
    </div>

    <button
      class="c-filters-panel__toggle"
      type="button"
      aria-controls="filters-drawer"
      aria-expanded="false"
      data-closed-text="Ver filtros"
      data-open-text="Cerrar filtros"
    >
      <span class="c-filters-panel__toggle-icon" aria-hidden="true"></span>
      <span class="c-filters-panel__toggle-label">Ver filtros</span>
    </button>
  `;
}
