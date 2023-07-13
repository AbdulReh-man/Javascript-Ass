/* Write a JavaScript program that implements the Merge Sort
 algorithm to sort an array of numbers in ascending order.
  Avoid using any built-in sorting functions.*/


let merge_sort=(arr)=>
{
    if(arr.length<=1)
    return arr;

    const mid=Math.floor(arr.length/2);
    const left=arr.slice(0 , mid);
    const right=arr.slice(mid);
    return merge(merge_sort(left), merge_sort(right));
}

function merge(rigth, left)
{
    let sortedarr=[];
    while(left.length &&  rigth.length)
    {
        if(left[0] < rigth[0])
        {
            sortedarr.push(left.shift());
        }
        else
        {
            sortedarr.push(rigth.shift());
        }
    }
    return sortedarr.concat(left.slice()).concat(rigth.slice());
}

const arr=[-4, -2, 4,3,1,2];
console.log(`The  numbers in ascending order--> ${merge_sort(arr)}`);