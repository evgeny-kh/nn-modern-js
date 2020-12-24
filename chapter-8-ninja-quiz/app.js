const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultSection = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;

  //writing user answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){score += 25;};
    console.log(score);
  });

  //display results
  resultSection.querySelector('.score').textContent = `${score}%`;
  resultSection.classList.remove('d-none');

  //scroll to top
  scrollTo(0,0);

  //animating the result
  let output = 0;
  const timer = setInterval(() => {
    resultSection.querySelector('.score').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});