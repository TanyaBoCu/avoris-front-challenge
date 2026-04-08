import test from 'node:test';
import assert from 'node:assert/strict';

import { calculatePriceBreakdown } from '../src/js/modules/calculate-price.js';

function createCardElement(overrides = {}) {
  return {
    dataset: {
      pricePerDay: '20496',
      fixedFee: '0',
      daysDefault: '1',
      iva: '21',
      currency: 'EUR',
      ...overrides
    }
  };
}

test('calculatePriceBreakdown usa los dias por defecto si no hay fechas', () => {
  globalThis.document = {
    querySelector: () => null
  };

  const result = calculatePriceBreakdown(createCardElement());

  assert.equal(result.days, 1);
  assert.equal(result.baseAmount, 20496);
  assert.equal(result.ivaAmount, 4304);
  assert.equal(result.totalAmount, 24800);
});

test('calculatePriceBreakdown calcula dias a partir del rango de fechas', () => {
  const values = {
    'input[name="date-start"]': { value: '2026-04-10' },
    'input[name="date-end"]': { value: '2026-04-13' }
  };

  globalThis.document = {
    querySelector: (selector) => values[selector] ?? null
  };

  const result = calculatePriceBreakdown(createCardElement());

  assert.equal(result.days, 3);
  assert.equal(result.baseAmount, 61488);
  assert.equal(result.ivaAmount, 12912);
  assert.equal(result.totalAmount, 74400);
});
