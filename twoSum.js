const twoSum = (nums, target) => {
  const inputArray = nums;
  const copyOfInputArray = [...inputArray];
  let sumOfAnyTwoItemsOfNums = target;

  //loop through the nums array items
  for (let i = 0; i < copyOfInputArray.length; i++) {
  //check if sum of any two items in array sums up to the target;
      for (j = 0; j < inputArray.length; j++) {
          if((copyOfInputArray[i] + inputArray[j] === sumOfAnyTwoItemsOfNums) && !(copyOfInputArray[i] + inputArray[i] === sumOfAnyTwoItemsOfNums)) {
            return `${copyOfInputArray[i]} , ${inputArray[j]}`;
        }
    }
  }
};

let  arr = [2, 7, 11, 15]
let evenNums = [ 2, 6, 8, 11, 13]

console.log(twoSum(arr, 9))

console.log(twoSum(evenNums, 10))