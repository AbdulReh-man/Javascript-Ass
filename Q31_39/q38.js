/* Write a JavaScript function that checks if a given number is prime.*/

let check_prime=(num)=>
{
    if(num<1)
    return undefined;

    if(num===1)
    return false;

    for(let i=2; i<=num/2; i++)
    {
        if(num%i===0)
        return false;
    }
    return true;
}

let num=29;
console.log(`${check_prime(num)}`);