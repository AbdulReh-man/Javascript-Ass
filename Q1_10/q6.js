/* Write a JavaScript function that takes in an array of objects representing
  students (each object has properties for name and grade). Sort the array in 
  descending order based on the students' grades. */
  
  function des(arr)
  {
    for(let i=0; i<arr.length-1; i++)
    {
      for(let j=i+1; j<arr.length; j++)
      {
        if(arr[i].grade<arr[j].grade)
        {
          let temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
      }
    }
  }

  let arr=[ { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 95 }];

  des(arr);
  console.log("Result in Descending Order--> ",arr);