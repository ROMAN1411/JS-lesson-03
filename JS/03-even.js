/** Напиши скрипт, який підрахує суму всіх парних чисел масиву */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total = 0;

console.table(numbers);

for (const number of numbers) {
  console.log(number);
  if (number % 2 === 0) {
    total += number;
  }
}

console.log('total:', total);
