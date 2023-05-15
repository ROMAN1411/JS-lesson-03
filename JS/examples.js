/** Додавання елементів масиву користувачем */

let cars = [];

while (true) {
  const car = prompt('Enter car name');
  if (!car) break;

  cars.push(car);
  console.log(cars);
}
