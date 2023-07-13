/* Write a JavaScript function that takes in a string and
 determines if it is an anagram of another string 
 (contains the same characters in a different order). */

 function anagram(str1, str2)
 {
    let rt="not a";
    const st1=str1.toLowerCase().replace(/[^a-z0-9]/g,(''));
    const st2=str2.toLowerCase().replace(/[^a-z0-9]/g,(''));

    const read1=st1.split("").sort().join();
    const read2=st2.split("").sort().join();

    if(read1===read2)
    {
        rt="a";
        return rt;
    }
    return rt;
 }

 let str1="listen";
 let str2="silent";
 console.log(`String is ${anagram(str1,str2)} Anagram`);