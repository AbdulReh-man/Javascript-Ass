/* Write an asynchronous JavaScript function called delayedSum that takes
 two numbers as parameters and returns the sum of the numbers after a delay
  of 1 second. Use async and await to handle the asynchronous delay.Your task
   is to implement the delayedSum function using async and await to wait for
    the delay before computing and returning the sum of the numbers. */
function wait (ms)
{
    return  new Promise(resolve=>setTimeout(resolve, ms));
}

async function delayedSum(num1, num2)
{
    await wait(1000);
    return num1+num2;
}

async function run()
{
    try {
        let result=await delayedSum(5,7);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
run();