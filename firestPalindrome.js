const firstPalindrome = (words) => {
  for (const word of words) { // looping through the words in the words array
    const firstLetter = word[0]; // Get index of first letter of a word
    const LastLetter = word[-1]; // Get index of last letter of a word
    const FirstLetterIndex = word[word.length -1];
    const LastLetterIndex = word[word.length -1];
    if (FirstLetterIndex === LastLetterIndex) { //first letter is the same as last letter
      return word;
    }
  }
};

const words = ["abc", "car", "ada", "racecar", "cool"]

console.log(firstPalindrome(words))