//		Get the mean of an array
//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
let count = marks.length;
let sum = 0;
  
  for(let i = 0; i < count; i++){
    sum = sum + marks[i];
  }
  let sum1 = sum / count;
  let round = Math.floor(sum1);
  return round;
}