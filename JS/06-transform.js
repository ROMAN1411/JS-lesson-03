/** Напиши скрипт, який обєднує усі елементи масиву в одне строкове значення
 *
 * Елементів може бути довільна кількість
 * нехай елементи масиву в рядку будуть розділені комою
 *
 * спочатку через for
 * потім через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
console.log(friends);

// let string = '';

// for (const friend of friends) {
//   //   console.log(friend);
//   string += friend + ',';
// }

// console.log(string);
// string = string.slice(0, string.length - 1);
// console.log(string);

// console.log(string);
console.log('---------------------');

const string = friends.join(',');
console.log(string);
console.log(friends);
