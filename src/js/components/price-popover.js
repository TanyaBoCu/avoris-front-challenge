export function PricePopover() {
  return `
    <div id="price-popover" class="price-popover-cont" aria-hidden="true">
      <div class="price-popover__panel" role="dialog" aria-labelledby="price-popover-title">
        <div class="price-popover__header">
          <h5 id="price-popover-title">Desglose de precios</h5>

          <button type="button" class="price-popover__close" aria-label="Cerrar">×</button>
        </div>

        <div class="prices-cont">
          <div class="price-popover__destination">
            <span class="dest" data-popover-destination></span>,
            <span class="reg" data-popover-region></span>
            <span class="days" data-popover-days></span>
          </div>

          <div class="price-popover__body">
            <div class="row">
              <span>Precio antes de impuestos</span>
              <span class="amount" data-popover-base></span>
            </div>

            <div class="row">
              <span>IVA</span>
              <span class="amount" data-popover-iva></span>
            </div>
          </div>
        </div>

        <div class="price-popover__footer">
          <span>Precio final</span>
          <strong class="amount" data-popover-total></strong>
        </div>
      </div>
    </div>
  `;
}