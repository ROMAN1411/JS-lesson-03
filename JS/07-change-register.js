/** Напиши скрипт, який змінює регістр кожного символу в рядку на протилежний */

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(string);
console.log(letters);

for (const letter of letters) {
  console.log(letter);
  //   if (letter === letter.toLowerCase()) {
  //     console.log(letter, 'Нижній регістр');
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log(letter, 'Верхній регістр');
  //     invertedString += letter.toLowerCase();
  //   }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);

console.log('---------------------------------');
