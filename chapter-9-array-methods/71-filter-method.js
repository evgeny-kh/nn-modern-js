const scores = [10,30,15,25,50,40,5];

const filteredScores = scores.filter((score)=> {
  return score > 20; //returns all scores more than 20
});

console.log(scores); //the array itself is unharmed

const users = [
  {name:'max', premium: false},
  {name:'tedd', premium: true},
  {name:'ivan', premium: false},
  {name:'john', premium: false},
];

const premiumUsers = users.filter( user => user.premium);

console.log(premiumUsers);