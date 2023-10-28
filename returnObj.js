const returnObj = (arrInput) => {
  const arr = arrInput;
  const copyOfArr = [...arr]; // copy of original array
  const evens = new Array();
  const odds = new Array();
  const chars = new Array();
  const newObj = { evens, odds, chars };
  // const divisibleByTwo = new Array();
  //loop through the items in the array

  for (let i of arr) {
    // check if item is either even, odd of char
    if (typeof i === 'string') {
      // check for item with string data type
      newObj.chars.push(i);
    }
    if (typeof i === 'number') {
      // check for item of number data type
      if (i % 2 === 0) {
        newObj.evens.push(i);
      } else {
        newObj.odds.push(i);
      }
    }
  }
  return newObj;
}

const arrInput = [3.0, 'a', 7, 'x', 20, 'd', 4, 'f', 8]

console.log(returnObj(arrInput));

//sort array first
// function sortArray(arrInput) {
//   let sampleArray = arrInput;
//   let sampleArrayCopy = [...arrInput];

//   for (let i of sampleArrayCopy) {
//     for (let j = 0; j < sampleArray.length; j++) {
//       if (sampleArrayCopy[i] < sampleArray[j] && sampleArrayCopy[j] !== sampleArray[j]) {
//         sampleArray[sampleArray.indexOf(i)] = sampleArray[j];
//         sampleArray[j] = i;
//       }
//     }
//   }
//   return  sampleArray;
// }

// console.log(sortArray(arrInput))