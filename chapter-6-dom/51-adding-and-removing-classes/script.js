// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('Error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('Success')){
        p.classList.add('success');
    }
});

