/* Write a JavaScript program that takes in an array of strings and
\ groups them into anagrams. An anagram is a word formed by rearranging
\ the letters of another word. The program should return an array of arrays,
 where each inner array represents a group of anagrams.*/

 function Group_anagram(arr)
 {
    const obj={};
    for (const get of arr)
    {
        const str = get.split('').sort().join('');
        if(str in obj)
        {
            obj[str].push(get);
        }    
        else
        {
            obj[str]=[get];
        }
    }
    return Object.values(obj);
 }

 const arr=['let', 'tel', 'dog', 'god', 'etl'];
 console.log("group of anagrams are--> ", Group_anagram(arr));