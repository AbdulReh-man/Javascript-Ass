/* Write a JavaScript program that takes in an array of integers and 
finds the maximum sum of a subarray within the array. The program 
should return the maximum sum.*/

function max_Subsum(arr)
{
    let Previous_sum=0;
    let current_sum=0;
   
    for(let arr_iter of arr)
    {
        Previous_sum=Math.max(0, (Previous_sum+arr_iter));
        current_sum=Math.max(current_sum, Previous_sum);
    }
    return current_sum;
}
let arr=[-3,-5,6,4,3,7,5,-6,-3];
console.log(`The Maximum Subarray Sum is--> ${max_Subsum(arr)}`);