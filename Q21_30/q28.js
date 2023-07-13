/* Write a JavaScript program that takes in a number and determines
 if it is a happy number. A happy number is defined by the following
  process: Starting with any positive integer, replace the number by 
  the sum of the squares of its digits, and repeat the process until 
  \the number equals 1. If the number ends in 1, it is a happy number;
   otherwise, it is not. */

function isHappyNumber(number) {
  const visited = new Set();
  while (number !== 1 && !visited.has(number)) {
    visited.add(number);
    number = Array.from(String(number))
      .map(Number)
      .reduce((sum, digit) => sum + digit ** 2, 0);
  }

  return number === 1;
}
  console.log(isHappyNumber(19)); 
  console.log(isHappyNumber(4)); 
  console.log(isHappyNumber(7)); 
  