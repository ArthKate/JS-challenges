const returnObj = (arrInput) => {
  const arr = arrInput;
  const copyOfArr = [...arr]; // copy of original array
  const evens = new Array();
  const odds = new Array();
  const chars = new Array();
  const newObj = { evens, odds, chars };
  // const divisibleByTwo = new Array();
  //loop through the items in the array

  for (let item of copyOfArr) {
    for (let i = 0; i < arr.length; i++) {
      if (copyOfArr[item] < arr[i] && copyOfArr[item] !== arr[i]) {
        arr[arr.indexOf(item)] = arr[i];
        arr[i] = item;
      }
    }
    return arr;
  }

  for (let item of arr) {
    // check if item is either even, odd of char
    if (typeof item === 'string') {
      // check for item with string data type
      newObj.chars.push(item);
    }
    if (typeof item === 'number') {
      // check for item of number data type
      if (item % 2 === 0) {
        newObj.evens.push(item);
      } else {
        newObj.odds.push(item);
      }
    }
  }
  return newObj;
};


const arr = [3.0, 'a', 7, 'x', 20, 'd', 4, 'f', 8]

console.log(returnObj(arr));