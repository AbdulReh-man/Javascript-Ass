/* Write a JavaScript function that takes in a number 
and generates the Fibonacci sequence up to that number. */

let fibnocci=(num)=>
{
        let sequence = [];
        let prev = 0;
        let curr = 1;
      
        for (let i = 1; i <= num; i++) {
          sequence.push(prev);
          let next = prev + curr;
          prev = curr;
          curr = next;
        }
        return sequence;
}
let num=10;
console.log(fibnocci(num));
