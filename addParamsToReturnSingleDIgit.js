const addParamsToReturnSingleDIgit = (num) => {
  let paramsArr = num.toString().split("");
  if (paramsArr.length === 1) {
    let backToNum = paramsArr.map(strItem => parseInt(strItem));
    return backToNum[0];
  }else {
    let backToNum = paramsArr.map(strItem => parseInt(strItem))
    const sumNumsindex = (...backToNum) => {
      return backToNum.reduce((accumulator, currVal) => accumulator + currVal, 0);
    }
    return sumNumsindex(...backToNum)
  }
}

console.log(addParamsToReturnSingleDIgit(62))