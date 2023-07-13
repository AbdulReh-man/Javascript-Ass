/* Write a JavaScript program that takes in a string and finds 
the longest palindrome within the string. The program should 
return the longest palindrome substring.*/

let long_palidrome=(str)=>
{
    let str_ing="";
    for(let i=0; i<str.length; i++)
    {
        for(let j=i+1; j<=str.length; j++)
        {
            let substring=str.slice(i, j);
            const reverse=substring.split('').reverse().join('');
            if(reverse===substring && substring.length >= str_ing.length)
            {
                str_ing=substring;
            }
        }
    }
    return str_ing;
}

let str="You Are a Bad boy";
const st=str.toLowerCase().replace(/[^a-z0-9]/g,(''));
console.log(`The Longest Palidrome substring is--> ${long_palidrome(st)}`);