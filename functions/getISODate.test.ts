import { expect, test } from 'vitest';
import getISODate from './getISODate';

test('properly formats the current date', () => {
  const dateObj = new Date();
  const [dateISO] = dateObj.toISOString().split('T');
  expect(getISODate(dateObj)).toBe(dateISO);
});

test('properly formats a given date', () => {
  const dateObj = new Date('January 1, 1970');
  expect(getISODate(dateObj)).toBe('1970-01-01');
});
