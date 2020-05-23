const para = document.querySelector('p');
console.log(para.innerText);

para.innerText = 'ninjas are awesome!';
console.log(para.innerText);

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += ' new text';
    console.log(para.innerText);    
});

const content = document.querySelector('.content');
console.log(content.innerHTML);

content.innerHTML += '<h2>This is a new text</h2>';
console.log(content.innerHTML);

const  people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})