/* Write a JavaScript program that takes in a string and finds the
 longest common substring among all possible pairs of substrings 
 within the string. The program should return the longest common substring.*/

 function longestCommonSubstring(string) {
  let longestCommonSubstring = '';

  for (let i = 0; i < string.length - 1; i++){
    for (let j =i+1; j < string.length; j++) {
      const commonSubstring = findCommonSubstring(string.slice(i), string.slice(j));
      console.log(string.slice(i),  string.slice(j));
      if (commonSubstring.length > longestCommonSubstring.length) {
        longestCommonSubstring = commonSubstring;
      }
    }
  }

  return longestCommonSubstring;
}

function findCommonSubstring(substring1, substring2) {
  let commonSubstring = '';
  let i = 0;

  while (i < substring1.length && i < substring2.length && substring1[i] === substring2[i]) {
    commonSubstring += substring1[i];
    i++;
  }

  return commonSubstring;
}

// Example usage
const string = 'abcdefabcdefabc';
console.log(longestCommonSubstring(string)); // Output: 'abcdef'
