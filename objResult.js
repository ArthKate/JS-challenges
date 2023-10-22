const returnObj = (numsArray) => {
  const newObj = {}
  // const divisibleByTwo = new Array();
  //loop through the items in the array
  for (let item in numsArray) {
  // chekck if item is either even, odd of char
    if (item % 2 === 0) {
      newObj[evens] = new Array();
      newObj[evens].push(item);
    }else if (item % 2 === 1) {
      newObj[odds].push(item);
    }else {
      newObj[chars].push(item);
    }
  }
};