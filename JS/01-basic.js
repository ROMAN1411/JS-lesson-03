// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax', 1, 2, 3];

// console.log(friends);
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// console.log(friends[2]);

// friends[1] = 'Qwerty';

// console.table(friends);

console.log('-------------------------');

//* Передача по знеаченню

let a = 10;
let b = a;

console.log('a', a);
console.log('b', b);

a = 20;

console.log('a', a);
console.log('b', b);

console.log('-------------------------');

//* Передача по силці

const c = [1, 2, 3];
const d = c;

console.log('c', c);
console.log('d', d);

c[0] = 100;

console.log('c', c);
console.log('d', d);

console.log(c === d);
//! Копіюється посилання на ячейку памяті

console.log([1, 2, 3] === [1, 2, 3]);

console.log('-------------------------');

/** Перебір (ітерація) масиву
 //* - for - якщо потрібен індекс чи потрібно змінити елемент масиву
 */

const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];

// console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//   //   console.log(i);
//   console.log(friends[i]);
// }

// for (let i = 0; i <= friends.length - 1; i += 1) {
//   friends[i] += '-1';
// }
// console.table(friends);

//* - for...of - якщо індекс НЕ потрібен і в масиві нічого змінювати не потрібно

// for (const iterator of object) {
// }

for (const friend of friends) {
  console.log(friend);
}

// console.table(friends);
