import { clamp } from './clamp';
import { normalize } from './normalize';

/**
 * @description
 * Normalizes (or interpolates) a value across a current scale and a new scale,
 * and clamps the result.
 *
 * @author Josh W. Comeau
 */
export function clampedNormalize(
  value: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1
): number {
  return clamp(
    normalize(
      value,
      currentScaleMin,
      currentScaleMax,
      newScaleMin,
      newScaleMax
    ),
    newScaleMin,
    newScaleMax
  );
}
