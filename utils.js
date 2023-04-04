// Based off of Python's range() function
export function range(number1, number2, step = 1) {
  const output = []

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
