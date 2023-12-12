import { readInput } from '../utils/readInput';

const numberString = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

type NumberValue = {
  index: number;
  value: number;
};

function sortByIndex(a: NumberValue, b: NumberValue) {
  return a.index - b.index;
}

function getEquivalentValue(string: string) {
  for (let i = 0; i < numberString.length; i++) {
    if (string === numberString[i]) {
      return i + 1;
    }
  }

  return 0;
}

function extractNumber(string: string): number {
  const array: NumberValue[] = [];
  const indexes: number[] = [];

  // get all the numeric values
  for (let i = 0; i < string.length; i++) {
    const parsedChar = parseInt(string[i]);

    if (!isNaN(parsedChar)) {
      array.push({
        index: i,
        value: parsedChar,
      });

      indexes.push(i);
    } else {
      // get all the number words
      for (let j = 0; j < numberString.length; j++) {
        const index = string.indexOf(numberString[j], i);

        const hash = {
          index,
          value: getEquivalentValue(numberString[j]),
        };

        if (index >= 0) {
          array.push(hash);
        }
      }
    }
  }

  // sort based on index value
  array.sort(sortByIndex);

  // merge first and last element
  const a = array[0].value;
  const b = array.at(-1)?.value;

  // parse to int
  const value = parseInt(`${a}${b}`);
  return value;
}

function calculateTotal(array: string[]) {
  let total = 0;

  array.forEach((string) => {
    const number = extractNumber(string);
    total += number;
  });

  return total;
}

const inputs = readInput('input.txt');
const result = calculateTotal(inputs);

console.log(result);
