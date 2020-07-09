const article = document.querySelector('article');
console.log(article.children);

// putting a collection into an array
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
})

// several step selection
const title = document.querySelector('h1');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);