import { expect, test } from 'vitest';
import { getAnimateValuesString } from './getAnimateValuesString';

test('handle positive integers', () => {
  expect(getAnimateValuesString(1, 2)).toBe('1;2;2');
});
test('handle zero in first arg', () => {
  expect(getAnimateValuesString(0, 2)).toBe('0;2;2');
});
test('handle zero in second arg', () => {
  expect(getAnimateValuesString(2, 0)).toBe('2;0;0');
});
