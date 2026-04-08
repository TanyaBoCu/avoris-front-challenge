import { DestinationCard } from './destination-card.js';

export function DestinationList(title, group, items) {
  return `
    <div class="c-destination-list" data-group="${group}">
      <h4 class="c-destination-list__title">${title}</h4>

      <ul class="o-cards-grid" role="list">
        ${items.map((item) => DestinationCard(item)).join('')}
      </ul>
    </div>
  `;
}
