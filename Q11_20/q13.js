/* Write a JavaScript function that takes in two arrays of numbers and returns
 a new array containing only the numbers that are present in both arrays.*/

 function arr(arr1, arr2)
{
    let length=0;
    let get;
    if(arr1.length >= arr2.length)
    {
        length=arr1.length;
        get=chk( length, arr1, arr2);
    }
    if(arr2.length > arr1.length)
    {
        length=arr2.length;
        get = chk( length, arr2, arr1);
    }
    return get;
}

let chk=(length, arr1, arr2)=>
{
    let com_num=[];
    for(let i=0; i<length; i++)
    {
        const num=arr1[i];
        if(arr2.includes(num))
        {
            if(num==com_num)
            {
                continue;
            }
            com_num.push(num);
        }
    }
    return com_num;
}

 const arr1 = [1, 2, 3, 4];
const arr2 = [1,1,1,2,3,4,5];
console.log(`Common numbers in array are--> ${arr(arr1, arr2)}`); 

