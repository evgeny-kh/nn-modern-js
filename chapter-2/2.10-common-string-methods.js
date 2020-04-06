// common string methods

let email = 'email@email.com'

// найти последнюю позицию символа
let result = email.lastIndexOf('m');
console.log(result);

// отрезать кусок строки
let result2 = email.slice(0,5); // отрезать строку с 0 по 5 символ
console.log(result2);

let result3 = email.substr(2,5); // начать отрезок с позиции 2 и уйти на 5 вправо
console.log(result3);

// заменить сивмол в строке
let result4 = email.replace('m','@'); //заменить первую 'm' в строке на '@'
console.log(result4);