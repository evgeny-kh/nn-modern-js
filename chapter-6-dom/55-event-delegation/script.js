const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New element';
    ul.append(li);
});

ul.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    };
});