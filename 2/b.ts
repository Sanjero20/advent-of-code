import { readInput } from '../utils/readInput';

const inputs = readInput('input.txt');

function parseGameString(string: string) {
  const game = string.split(':');
  return game[1].split(';');
}

function getLeastRGBCube(game: string[]) {
  const rgbArray = [0, 0, 0];

  game.forEach((turn) => {
    const turnSet = turn.trim().split(',');

    turnSet.forEach((item) => {
      const output = item.trim().split(' ');

      const value = parseInt(output[0]);
      const color = output[1];

      // Check if the current color value is bigger than current
      if (color === 'red') {
        rgbArray[0] = value > rgbArray[0] ? value : rgbArray[0];
      } else if (color === 'green') {
        rgbArray[1] = value > rgbArray[1] ? value : rgbArray[1];
      } else if (color === 'blue') {
        rgbArray[2] = value > rgbArray[2] ? value : rgbArray[2];
      }
    });
  });

  return rgbArray;
}

function getPowerValue(array: number[]) {
  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}

let total = 0;

for (let i = 0; i < inputs.length; i++) {
  const currentGame = parseGameString(inputs[i]);
  const minValues = getLeastRGBCube(currentGame);
  const power = getPowerValue(minValues);

  total += power;
}

console.log(total);
