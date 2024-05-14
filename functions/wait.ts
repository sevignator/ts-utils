/**
 * @function Promise-based function to create an arbitrary delay in your program.
 */
export function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
