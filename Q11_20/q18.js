/* Write a JavaScript function that takes in a number and checks 
if it is a perfect number (a number equal to the sum of its proper divisors). */

function perfrct_num(num)
{
    let sum=0;
    let rt="Not a";
    if(num<=0)
    {
    return false;
    }
    for(let i=1; i<num; i++)
    {
        if(num%i===0)
        {
            sum+=i;
        }
    }
    if(sum===num){
        rt="a";
        return rt;
    }
    else
    return rt;
}

let number=5;
console.log(`The Number ${number} is ${perfrct_num(number)} perfect Number. `);