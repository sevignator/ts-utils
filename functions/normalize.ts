/**
 * @description
 * Normalizes (or interpolates) a value across a current scale and a new scale.
 *
 * @author Josh W. Comeau
 */
export function normalize(
  value: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1
): number {
  const standardNormalization =
    (value - currentScaleMin) / (currentScaleMax - currentScaleMin);

  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
}
