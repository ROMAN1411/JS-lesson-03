/** Напиши скрипт, який рахує суму елементів 2х масивів
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

const numbers = array1.concat(array2);

console.log(numbers);

for (const number of numbers) {
  total += number;
}

console.log(total);
