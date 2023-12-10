import * as fs from 'fs';

export function readInput(path: string) {
  const value = fs.readFileSync(`./${path}`, 'utf-8');
  return value.split('\n');
}
