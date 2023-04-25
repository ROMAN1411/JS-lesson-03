/** Напиши скрипт пошуку логіну
 *
 * - Якщо логіна немає, вивести повідомлення "Користувач (логін) не знайдений"
 * - Якщо знайшли логін, вивести повідомлення "Користувач (логін) знайдений"
 *
 * Спочатку через for
 * Потім через For...of
 * Логіка break
 * Метод includes() з тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Користувач ${loginToFind} не знайдений 😔`;

for (let i = 0; i < logins.length; i += 1) {
  //   const i = logins[i];
  //   console.log(logins[i]);
  if (loginToFind === logins[i]) {
    message = `Користувач ${loginToFind} знайдений 😀`;
    break;
  }
}

console.log(message);

console.log('----------------------------------');

for (const login of logins) {
  //   console.log(login);
  if (loginToFind === login) {
    message = `Користувач ${login} знайдений 😀`;
    break;
  }
}

console.log(message);

console.log('----------------------------------');

const message1 = logins.includes(loginToFind)
  ? `Користувач ${loginToFind} знайдений 😀`
  : `Користувач ${loginToFind} не знайдений 😔`;

console.log(message);
