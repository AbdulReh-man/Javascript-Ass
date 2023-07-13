/* Write a JavaScript function that takes in an array of strings
 and returns a new array with the strings sorted in alphabetical 
 order, ignoring case sensitivity.*/
function sort_alpha(str)
{
    return str.sort(function(a,b)
    {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
}

let str=["Banana", "Chocolate" , "Apple" , "PineApple" , "Mango"];
console.log(`${sort_alpha(str)}`);