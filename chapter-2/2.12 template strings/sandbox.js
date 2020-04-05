// template string
const title = '"Best reads of 2019"';
const author = 'Mario';
const likes = 30;

// concetanation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
console.log(result);

// template string wat
let result2 = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result2);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);