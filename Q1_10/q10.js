/* Write a JavaScript function that takes in two numbers and returns 
their greatest common divisor (GCD) using the Euclidean algorithm. */

function cal_Gcd(n1, n2)
{
    let r=-1;
    if(n1 < n2)
    {
        [n1, n2]=[n2, n1];
    }
    while(r!=0)
    {
        r=n1%n2;
        n1=n2;
        n2=r;
    }   
    return n1;
}

let num1=54;
let num2=87;
console.log(`GCD of ${num1} And ${num2} is--> ${cal_Gcd(num1, num2)}`);