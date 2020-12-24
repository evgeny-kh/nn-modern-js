const prices = [20,10,23,40,90,80,2];
const salesPrices = prices.map(price => price/2); //stores a new value for each array element into a new array

const products = [
  {name:'knife', price: 10},
  {name:'fork', price: 90},
  {name:'cup', price: 15},
  {name:'bowl', price: 20},
  {name:'place', price: 30},
];

const saleProducts = products.map(product => {
  if(product.price > 30){
    return {name: product.name, price: product.price / 2};
  } else {
    return product;
  };
});

console.log(products);
console.log(saleProducts);