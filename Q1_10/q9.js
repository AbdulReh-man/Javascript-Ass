/* Write a JavaScript function that takes in an array of numbers 
   and returns the average of all the numbers in the array */

let avg=(num)=>{
   let n_sum=0;
   if(num.length===0)
   return undefined;

   for(let i=0; i<num.length; i++)
   {
      n_sum+=num[i];
   }
   return (n_sum/num.length);
}

let n=[25, 43, 76 , 55, 20];
console.log(`Average of all the numbers in the array ${n} is--> ${avg(n)}`);