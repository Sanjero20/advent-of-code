import { readInput } from '../utils/readInput';

function extractNumberFromString(str: string) {
  const array: string[] = [];

  for (let i = 0; i < str.length; i++) {
    let char = parseInt(str[i]);
    if (isNaN(char) == false) {
      array.push(str[i]);
    }
  }

  return array;
}

function mergeNumber(array: string[]) {
  const first = array[0];
  const last = array[array.length - 1];
  return parseInt(`${first}${last}`);
}

function calculateTotal(values: string[]) {
  let total = 0;

  values.forEach((item) => {
    const value = extractNumberFromString(item);
    const number = mergeNumber(value);
    total += number;
  });

  return total;
}

const inputs = readInput('input.txt');
const total = calculateTotal(inputs);

console.log(total);
