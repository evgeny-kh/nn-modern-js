//sorting strings
const names = ['maerio', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort(); // sorts alphabeticaly by default. It's destructive
names.reverse(); // revereses elements order
console.log(names);

//sorting numbers
const scores = [10,20,40,4,91,22];
scores.sort((a,b) => b-a);
console.log(scores);

//sorting objects
const scores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
];

players.sort((a,b) => b.score - a.score);
console.log(players);