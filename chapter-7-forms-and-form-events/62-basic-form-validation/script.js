const signupForm = document.querySelector('.signup-form');

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  //validation
  const username = signupForm.username.value;
  const usernamePattern = /^[a-zA-z]{6,12}$/;
  const feedback = document.querySelector('.feedback');

  if (usernamePattern.test(username)){
    feedback.textContent = 'Submited!';
  } else {
    feedback.textContent = 'Sorry, username is invalid :(';
  }
});