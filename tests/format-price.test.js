import test from 'node:test';
import assert from 'node:assert/strict';

import { formatPrice } from '../src/js/utils/format-price.js';

test('formatPrice formatea importes en euros para es-ES', () => {
  assert.equal(formatPrice(20496), '204,96 €');
});

test('formatPrice acepta otra moneda', () => {
  assert.match(formatPrice(20496, 'USD'), /\$/);
});
