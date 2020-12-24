// break and continue

const scores = [50, 25, 0, 30, 100, 20, 0];

for(let i = 0; i < scores.length; i++){
   
    if(scores[i] === 0){
        continue;
    }

    console.log('your scores: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break
    }

}