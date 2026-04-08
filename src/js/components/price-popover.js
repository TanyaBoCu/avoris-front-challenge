export function PricePopover() {
  return `
    <div id="price-popover" class="c-price-popover" aria-hidden="true">
      <div class="c-price-popover__panel" role="dialog" aria-labelledby="price-popover-title">
        <div class="c-price-popover__header">
          <h5 id="price-popover-title">Desglose de precios</h5>

          <button type="button" class="c-price-popover__close" aria-label="Cerrar">×</button>
        </div>

        <div class="c-price-popover__content">
          <div class="c-price-popover__destination">
            <span class="c-price-popover__destination-name" data-popover-destination></span>,
            <span class="c-price-popover__destination-region" data-popover-region></span>
            <span class="c-price-popover__destination-days" data-popover-days></span>
          </div>

          <div class="c-price-popover__body">
            <div class="c-price-popover__row">
              <span>Precio antes de impuestos</span>
              <span class="c-price-popover__amount" data-popover-base></span>
            </div>

            <div class="c-price-popover__row">
              <span>IVA</span>
              <span class="c-price-popover__amount" data-popover-iva></span>
            </div>
          </div>
        </div>

        <div class="c-price-popover__footer">
          <span>Precio final</span>
          <strong class="c-price-popover__amount" data-popover-total></strong>
        </div>
      </div>
    </div>
  `;
}
