import { test, expect } from 'vitest';
import { clamp } from './clamp';

test('does not return a value lower than the min value', () => {
  expect(clamp(-10, 0, 10)).toBe(0);
});

test('does not return a value higher than the max value', () => {
  expect(clamp(11, 0, 10)).toBe(10);
});

test('inverses the min and max values when in the wrong order', () => {
  expect(clamp(11, 10, 0)).toBe(10);
});
