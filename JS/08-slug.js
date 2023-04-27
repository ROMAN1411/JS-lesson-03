/** Робимо SLUG и URL із назви статті (наприклад на dev.to)
 * Заголовок статті складається тільки із букв і пробілів
 *
 * - Нормалізуємо строку
 * - Розбиваємо по словах
 * - Зшиваємо у рядок із розділювачами*
 */

const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
console.log(words);

const slug = words.join('-');
console.log(slug);

console.log('--------------------------------------');

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
