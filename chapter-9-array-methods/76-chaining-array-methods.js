const products = [
  {name:'knife', price: 10},
  {name:'fork', price: 90},
  {name:'cup', price: 15},
  {name:'bowl', price: 20},
  {name:'place', price: 30},
];

// const filtered = products.filter(product => product.price > 20);
// const promos = filtered.map(product => `the ${product.name} is ${product.price /2}`);

const promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price /2}`);
console.log(promos);