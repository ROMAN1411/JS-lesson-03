/** Порахувати загальну суму покупок в корзині */

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

console.table(cart);

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }

// for (const value of cart) {
//   console.log(value);
//   total += value;
// }

// console.log('total:', total);

//* Добавити кожному 20% податку

for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.2);
  console.log(cart[i]);
  total += cart[i];
}

console.log('total:', total);
