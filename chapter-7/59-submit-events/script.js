const signupForm = document.querySelector('.signup-form');
// const username = document.querySelector('#username'); first way of getting input value

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value); loggin value
  console.log(signupForm.username.value); //easier way. Works for names and id
});