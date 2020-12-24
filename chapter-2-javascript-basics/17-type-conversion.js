let score = '100';
console.log(score + 1); //1001

// override variable with a numbered value of it

score = Number(score);
console.log(score +1); //101
console.log(typeof score); //number

score = String(score);
console.log(score + 1); //1001
console.log(typeof score); //string


// you can't convert string to number if it consist of letters
let result = Number('score');
console.log(result); //NaN (not a number)

// positive numbers are considered as boolean true values
let bool = Boolean(100); // true
let bool = Boolean(0); // false
let bool = Boolean('1'); // all strings are true
console.log(bool);