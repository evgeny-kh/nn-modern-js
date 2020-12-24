//look for an argument in the variable
let email = 'email@email.com';
let result = email.includes('@');
console.log(result);

//look for an argument in the array as an element
let names = ['john','peter'];
let result2 = names.includes('peter');
console.log(result2);

//comparison operators
let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age < 30);
console.log(age > 30);
console.log(age >= 25);
console.log(age >= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun'); //false
console.log(name > 'crystal'); //true cause 's' stand latter in the alphabet
console.log(name > 'Shaun'); //true cause lowercase letter are greater than uppercase letters
console.log(name > 'Crystal'); //also true