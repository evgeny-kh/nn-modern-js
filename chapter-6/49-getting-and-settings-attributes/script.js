const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.test.com');
console.log(link.getAttribute('href'));
link.innerText = 'funny link';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('style', 'color:green');