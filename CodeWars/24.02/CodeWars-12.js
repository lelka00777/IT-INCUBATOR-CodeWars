		//Array plus array

https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for(let i = 0; i < arr1.length; i++) {
    let res1 = arr1[i];
    let res2 = arr2[i];
    let result = res1 + res2;
    sum = sum + result;
  }
  return sum;
}

