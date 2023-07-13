/* Write a JavaScript function that takes in a sentence and 
  returns the word with the highest number of vowels.*/
function MostVowels(sentence) {
  let maxVowelCount = 0;
  let wordWithMostVowels = '';
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const vowelCount = countVowels(word);

    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      wordWithMostVowels = word;
    }
  }

  return wordWithMostVowels;
}

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();

    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const sent = 'Hel how are you ';
console.log(`Word with the highest number of vowels--> ${MostVowels(sent)}`);
