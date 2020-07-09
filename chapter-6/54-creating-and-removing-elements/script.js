const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New element';
    ul.append(li);
});

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
        item.remove();
    })
})