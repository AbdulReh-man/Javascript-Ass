/* Write a JavaScript function that takes in a number and calculates 
  its factorial (the product of all positive integers less than or equal to the number). */

function fact(num)
{
  if(num<0)
  {
    return undefined;
  }

  if(num===0 || num===1)
  {
    return 1;
  }

  return num*fact(num-1);
}

let n=-2;
console.log(`Factorial of ${n}--> ${fact(n)}`);