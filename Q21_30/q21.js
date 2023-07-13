/* Write a JavaScript program that takes in an array of numbers and 
finds the longest increasing subarray within the array. The program
 should return the starting and ending indices of the subarray.*/

 let get_longsubarr=(arr)=>
 {
    let start=0, end=0;
    let max_length=1;
    let start_length=1;
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i]>arr[i-1])
        {
        start_length++;
        if(start_length>max_length)
        {
            max_length=start_length;
            end=i;
            start=end-max_length+1;
        }
        }
        else
        {
            end;
            start_length=1;
        }

    }
    return [start, end];
 }


 let arr=[1,3,4,5, 1, 2,6,7,8,9,6];
 let [start, end]=get_longsubarr(arr);
 console.log(`The Longest Subarray is--> [${arr.slice(start, end+1)}]`);
 console.log(`Starting Index--> ${start}`);
 console.log(`Ending Index--> ${end}`);
