const isDivisibleByNumber3OrNumber5 = (x, y) => {
  const concatWord = (toString(x) + toString(y));
  const paramLength = concatWord.length;

  if (concatWord === 0){
    return "Enter a string whose length is not divisible by 3 or 4";
  }
  else if (paramLength % 3 === 0 && paramLength % 5 === 0){
    return 'Fizz Buzz';
  }else if (paramLength % 3 === 0){
    return 'Fizz';
  }else if (paramLength % 5 === 0) {
    return 'Buzz';
  }else {
    console.log(`concatenated parameters are ${concatWord}`)
    return `length of concatenated string isn't a multiple of either 15`;
  }
}

//console.log(isDivisibleByNumber3OrNumber5('onether', 'tenthwer'));


