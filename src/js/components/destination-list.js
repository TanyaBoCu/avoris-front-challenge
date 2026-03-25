import { DestinationCard } from './destination-card.js';

export function DestinationList(title, group, items) {
  return `
    <div class="destinations-options" data-group="${group}">
      <h4>${title}</h4>

      <ul class="cards-grid" role="list">
        ${items.map((item) => DestinationCard(item)).join('')}
      </ul>
    </div>
  `;
}