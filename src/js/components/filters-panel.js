import { filters } from '../../data/filters.js';
import { FilterGroup } from './filter-group.js';

export function FiltersPanel() {
  return `
    <div class="menu-filters" id="filters-drawer">
      <button class="filters-close" type="button" aria-label="Cerrar filtros">×</button>

      <form class="filters-form" id="filters" novalidate>
        <h4 class="filters-title">Filtrar mi búsqueda</h4>

        ${FilterGroup({
          groupClass: 'filter-dest',
          title: 'Destinos',
          name: 'destination',
          options: filters.destinations,
          labelledBy: 'destinos-label'
        })}

        ${FilterGroup({
          groupClass: 'filter-adv',
          title: 'Aventura',
          name: 'category',
          options: filters.categories,
          isOpen: true
        })}

        ${FilterGroup({
          groupClass: 'filter-acc',
          title: 'Alojamiento',
          name: 'stay',
          options: filters.stays
        })}

        <details class="filter-group filter-pri" open>
          <summary class="filter-summary">
            <i class="icon" aria-hidden="true"></i>
            <span>Precio</span>
          </summary>

          <div class="filter-content price-fields">
            <label class="pill-input">
              <span class="pill-icon" aria-hidden="true"></span>
              <input type="number" inputmode="numeric" name="price-min" placeholder="Mínimo" min="0" step="1">
            </label>

            <label class="pill-input">
              <span class="pill-icon" aria-hidden="true"></span>
              <input type="number" inputmode="numeric" name="price-max" placeholder="Máximo" min="0" step="1">
            </label>
          </div>
        </details>

        <details class="filter-group filter-dat" open>
          <summary class="filter-summary">
            <i class="icon" aria-hidden="true"></i>
            <span>Fechas</span>
          </summary>

          <div class="filter-content dates">
            <label class="date-field">
              <span>Desde</span>
              <input type="date" name="date-start">
            </label>

            <label class="date-field">
              <span>Hasta</span>
              <input type="date" name="date-end">
            </label>
          </div>
        </details>
      </form>
    </div>

    <button
      class="filters-toggle"
      type="button"
      aria-controls="filters-drawer"
      aria-expanded="false"
      data-closed-text="Ver filtros"
      data-open-text="Cerrar filtros"
    >
      <span class="icon" aria-hidden="true"></span>
      <span class="label">Ver filtros</span>
    </button>
  `;
}