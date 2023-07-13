/* Write a JavaScript program that takes in a string and determines
 if it can be constructed by concatenating words from a given array 
 of words.The program should return true if the string can be 
 constructed and false otherwise. */

 function string_construct(string, wordsArray) {
    for (let word of wordsArray) {
      if (string.startsWith(word)) 
      {
        const remainingString = string.slice(word.length);
        console.log(string.slice(word.length));
        if (remainingString === '' || string_construct(remainingString, wordsArray)) {
          return true;
        }
      }
    }
    return false;
  }

const arr=["Talha", "Abdul","Awais","Ameen","BlackBerry"];
console.log(string_construct("Abdul", arr));