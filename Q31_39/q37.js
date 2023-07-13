/* Write a JavaScript function that takes an array as a parameter and uses a for...of 
loop to display each element of the array.*/

let display=(arr)=>
{
    for (const [index, arr_element] of arr.entries()) {
        console.log(`The Value on index ${index} is--> ${arr_element}`);
    }
}

let arr=[1, 4, 6, 3,7 ];
display(arr);