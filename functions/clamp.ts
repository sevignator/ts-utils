/**
 * @description
 * Clamps a given value to always remain between two extremes (`min` and `max`).
 *
 * @author Josh W. Comeau <https://github.com/joshwcomeau>
 */
export function clamp(value: number, min: number = 0, max: number = 1): number {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.max(min, Math.min(max, value));
}
