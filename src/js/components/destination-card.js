export function DestinationCard(destination) {
  return `
    <li class="c-destination-list__item">
      <article
        class="c-card"
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
        <div class="c-card__media">
          <figure class="c-card__figure">
            <img
              src="${destination.image}"
              alt="${destination.imageAlt}"
              loading="lazy"
              decoding="async"
            >
          </figure>

          <span class="c-card__badge">${destination.badge}</span>
        </div>

        <div class="c-card__body">
          <div class="c-card__content">
            <p class="c-card__eyebrow">
              <span class="c-card__country" data-country>${destination.country}</span>,
              <span class="c-card__region" data-region>${destination.region}</span>
              <span class="c-card__days"><span data-days>${destination.daysDefault}</span> d&iacute;a</span>
            </p>

            <h5 class="c-card__title">${destination.title}</h5>
          </div>

          <div class="c-card__footer">
            <div class="c-card__price" aria-live="polite">
              <span class="c-card__from">Desde</span>
              <span class="c-card__amount" data-price-display>248,00&nbsp;&euro;</span>
              <a class="c-card__breakdown" href="#">Ver desglose</a>
            </div>

            <a class="c-card__cta" href="#">Reservar</a>
          </div>
        </div>
      </article>
    </li>
  `;
}
