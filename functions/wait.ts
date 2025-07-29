/**
 * @description
 * Function for creating an arbitrary delay in your program using a promise.
 */
export function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
