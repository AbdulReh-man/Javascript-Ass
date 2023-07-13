/* Write a JavaScript function that takes in an array of integers 
and returns the sum of all the positive numbers in the array. */

function sum(arr)
{
    let sum=0;
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i]>=0)
        {
            sum=sum+arr[i];
        }
    }
    return sum;
}

let arr=[1, 5, 43, 5, -5, -4];
console.log(`Sum is ${sum(arr)}`);