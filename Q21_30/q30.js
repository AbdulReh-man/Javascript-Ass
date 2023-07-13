/* Write a JavaScript program that implements the Sieve of 
Eratosthenes algorithm to find all prime numbers up to a given 
number. The program should return an array of prime numbers.*/

let prime_num=(num)=>
{
    let prime=[];
    const is_prime=new Array(num+1).fill(true);
    is_prime[0]=is_prime[1]=false;
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(is_prime[i])
        {
            for(let j=i*i; j<=num; j+=i)
            {
                is_prime[j]=false;
            }
        }
    }

    for(let i=2; i<=num; i++)
    {
        if(is_prime[i])
        prime.push(i);
    }

    return prime;
}

let num=50;
console.log(`The Prime Numbers In Given Range ${num} are--> { ${prime_num(num)} }`);