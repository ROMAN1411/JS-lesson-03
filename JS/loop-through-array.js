const cars = ['audi', 'bmw', 'ford', 'fiat'];
let result = '';

for (let i = 0; i < cars.length; i += 1) {
  result += ` ${cars[i]}`;
}

console.log(result.trim());
console.log(result);
console.log('-----------------------------');

let allCars = '';
for (const car of cars) {
  console.log(car);
  allCars += ` ${car}`;
}

console.log(allCars.trim());
console.log('-----------------------------');

/** Знайти індекс елементу */

let carIndex;
for (let i = 0; i < cars.length; i += 1) {
  console.log(cars[i]);

  if (cars[i] === 'bmw') {
    carIndex = i;
    break;
  }
}

console.log(`Index BMW - ${carIndex}`);
console.log('-----------------------------');

/** Якщо ауді чи БМВ, сказати що хороші авто */

for (const car of cars) {
  if (car === 'audi' || car === 'bmw') {
    console.log(`Nice car ${car}`);
    continue;
  }
  console.log(`Good car ${car}`);
}
console.log('-----------------------------');

/** Присвоєння по силці і по значенню */

const bar = [1, 2, 3];
