//		Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript



function isDivisible(n, x, y) {

  let res1 = n/x;
  let res2 = n/y;
  
  if (res1 % 1 ===0 && res2 % 1 === 0){
    return true;
  }else {
    return false;
  }
}
