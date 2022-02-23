//		Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript


function multiTable(number) {
  let res = ''
  for(let i = 1; i <= 10; i++){
    res += `${i} * ${number} = ${i * number}`;
    if(i < 10)
      res += '\n';
  }
  return res;
}