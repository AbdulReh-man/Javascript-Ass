/* Write a JavaScript function that takes in a string and checks 
if it is a palindrome (reads the same forwards and backwards) 
without using any built-in reverse functions. */

function palidrome(str)
{
    let str2= str.toLowerCase().replace(/[^a-z0-9]/g,(''));

    for(let i=0, j=str2.length-1 ; i<j ;i++, j--)
    {
        if(str2[i]!==str2[j])
        return false;
    }
    return true;
}

const str="TET";
let g=palidrome(str);
console.log(g);