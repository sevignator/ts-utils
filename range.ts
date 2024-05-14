// Based off of Python's range() function
// Credits to Josh W. Comeau (https://github.com/joshwcomeau)
export function range(number1: number, number2: number, step = 1) {
  const output: number[] = [];

  if (number2) {
    for (let i = number1; i < number2; i += step) {
      output.push(i);
    }
  } else {
    for (let i = 0; i < number1; i++) {
      output.push(i);
    }
  }

  return output;
}
