//Declare the array
let ninjas = ['shaun', 'ryu', 'chun-li'];

//Pick override array element
ninjas[1] = 'ken';

console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]); //write second array element

//Multi-type array
let random = ['shaun', 'crystal', 30, 30];

//Write the array length
console.log(ninjas.length);

//Array methods

//Connect elements into one string separated with the argument
let result = ninjas.join('-');
console.log(result);

//Write element's position
let result2 = ninjas.indexOf('shaun');
console.log(result2);

//Concat two arrays
let result3 = ninjas.concat(['ken', 'crystal']);
console.log(result3);

//Add a new value in array
let result4 = ninjas.push('joe');
console.log(ninjas);

//Show the last value
result4 = ninjas.pop();
console.log(result4);