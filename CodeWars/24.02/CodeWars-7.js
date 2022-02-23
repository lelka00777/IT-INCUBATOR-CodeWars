// 		Rock Paper Scissors!

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  let res = {paper: 'rock', rock: 'scissors', scissors: 'paper'};
  return res[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
  };