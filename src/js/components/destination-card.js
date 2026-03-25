export function DestinationCard(destination) {
  return `
    <li class="card-item">
      <article
        class="card"
        data-id="${destination.id}"
        data-destination="${destination.country.toLowerCase()}"
        data-region="${destination.region.toLowerCase()}"
        data-continent="${destination.continent}"
        data-category="${destination.category}"
        data-stay="${destination.stay}"
        data-days-default="${destination.daysDefault}"
        data-price-per-day="${destination.pricePerDay}"
        data-fixed-fee="${destination.fixedFee}"
        data-currency="${destination.currency}"
        data-iva="${destination.iva}"
      >
        <div class="card-media">
          <figure class="card-figure">
            <img
              src="${destination.image}"
              alt="${destination.imageAlt}"
              loading="lazy"
              decoding="async"
            >
          </figure>

          <span class="badge">${destination.badge}</span>
        </div>

        <div class="card-body">
          <div class="info-card">
            <p class="eyebrow">
              <span class="country" data-country>${destination.country}</span>,
              <span class="region" data-region>${destination.region}</span>
              <span class="days"><span data-days>${destination.daysDefault}</span> día</span>
            </p>

            <h5 class="card-title">${destination.title}</h5>
          </div>

          <div class="card-footer">
            <div class="price" aria-live="polite">
              <span class="from">Desde</span>
              <span class="amount" data-price-display>248,00&nbsp;€</span>
              <a class="breakdown" href="#">Ver desglose</a>
            </div>

            <a class="btn-reservar" href="#">Reservar</a>
          </div>
        </div>
      </article>
    </li>
  `;
}