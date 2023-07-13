/* Write a JavaScript function that takes in a string 
and returns the most frequent character in the string*/

function mostfre(str)
{
    let charob={};
    let mstchar='';
    let count=0;
    for(let char of str)
    {
        if(char==" ")
        continue;
        if(charob[char])
        {
            charob[char]++;
        }
        else
        charob[char]=1;
    }
    for(let char in charob)
    {
        if(charob[char]>count)
        {
            count = charob[char];
            mstchar=char;
        }
    }
    return mstchar+ " ("+count+")" ;
}


let str="What a Boring Day It Was";
console.log(`The Most Frequent Character that occur is--> ${mostfre(str)}`);