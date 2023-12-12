import { readInput } from '../utils/readInput';

const inputs = readInput('input.txt');

function parseGameString(string: string) {
  const game = string.split(':');
  return game[1].split(';');
}

function gameIsPossible(game: string[]): boolean {
  const result = game.every((turn) => {
    const turnSet = turn.trim().split(',');

    // Set default value for rgb color cubes
    const rgbArray = [0, 0, 0];

    turnSet.forEach((item) => {
      const output = item.trim().split(' ');

      const value = parseInt(output[0]);
      const color = output[1];

      if (color === 'red') {
        rgbArray[0] = value;
      } else if (color === 'green') {
        rgbArray[1] = value;
      } else if (color === 'blue') {
        rgbArray[2] = value;
      }
    });

    // Check if the cubes in this turn is less than or equal to the max values
    const possible = rgbArray.every((value, index) => value <= maxCubes[index]);
    return possible;
  });

  return result;
}

// 12 red, 13 green, 14 blue cubes
const maxCubes = [12, 13, 14];

let total = 0;

for (let i = 0; i < inputs.length; i++) {
  const gameId = i + 1;
  const currentGame = parseGameString(inputs[i]);
  const possible = gameIsPossible(currentGame);

  if (possible) {
    total += gameId;
  }
}

console.log(total);
