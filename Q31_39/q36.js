/*Write a JavaScript function that calculates the factorial of a given number using recursion.*/

let cal_fact=(num)=>{
    if(num<0)
    return undefined;
    if(num===0 || num===1)
    return 1;
    return (num * cal_fact(num-1));
}

let num=5;
console.log(`Facorial of ${num} is--> ${cal_fact(num)}`);