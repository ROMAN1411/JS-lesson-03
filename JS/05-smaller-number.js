/** Напиши скрипт пошуку найменьшого числа в масиві
 * при умові, що числа унікальні (не повторюються)
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  // console.log(numbers[i]);
  if (numbers[i] > min) {
    continue;
  }
  min = numbers[i];
}

console.log('min', min);

console.log('--------------------------');

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}

console.log('min', min);

for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}

console.log('max:', max);
