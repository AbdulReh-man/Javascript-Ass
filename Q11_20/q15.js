/* Write a JavaScript function that takes in an array of numbers
 and removes all duplicates, returning a new array with unique elements only.*/


function rem_dupl(arr)
{
    let unique=[];
    for(let i=0; i<arr.length; i++)
    {
        let num=arr[i];
        if(!unique.includes(num))
        {
            unique.push(num);
        }
    }
    return unique;
}

const arr=[1,43,43,56,22,1,3,4,10];
console.log(rem_dupl(arr));