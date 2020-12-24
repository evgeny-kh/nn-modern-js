const signupForm = document.querySelector('.signup-form');
const usernamePattern = /^[a-zA-z]{6,12}$/;

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  //validation
  const username = signupForm.username.value;
  const feedback = document.querySelector('.feedback');

  if (usernamePattern.test(username)){
    feedback.textContent = 'Submited!';
  } else {
    feedback.textContent = 'Sorry, username is invalid :(';
  }
});

//live feedback
signupForm.username.addEventListener('keyup', e =>{
  if(usernamePattern.test(e.target.value)){
    username.setAttribute('class', 'success');
  } else {
    username.setAttribute('class', 'error');
  }

});