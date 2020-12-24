const signupForm = document.querySelector('.signup-form');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(signupForm.username.value);
});

// testing RegEx
const username = 'shaun';
const pattern = /^[a-z]{6,}&/;

let result = pattern.test(username); // return true or false
console.log(result); // false

let result2 = username.search(pattern); // another way but it returns -1 for mismatch or int for position of the match
console.log(result2); //0