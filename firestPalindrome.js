const firstPalindrome = (words) => {
  for (const word of words) { // looping through the words in the words array
    let flippedWord = word.split('').reverse().join('');
    if (word === flippedWord) { //check if the original word is the same as the reversed word.
      return word;
    } 
  }
  return '';
};

const demo = ["abc", "car", "ada", "racecar", "cool"]