const returnObj = (numsArray) => {
  const evens = new Array();
  const odds = new Array();
  const chars = new Array();
  const newObj = { evens, odds, chars };
  // const divisibleByTwo = new Array();
  //loop through the items in the array
  for (let item of numsArray) {
    // check if item is either even, odd of char
    if (typeof item === 'string') {
      newObj.chars.push(item);
      };
    if (typeof item === 'number') {
      if (item % 2 === 0) {
        newObj.evens.push(item); 
        }
      else  { 
        newObj.odds.push(item);
      }
    }
  }
  return newObj;
};


const arr = [3.0, 'a', 7, 'x', 20, 'd', 4, 'f', 8]

console.log(returnObj(arr));