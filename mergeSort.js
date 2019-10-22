function split(wholeArray) {
  const lenOfFirstHalf = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, lenOfFirstHalf);
  const secondHalf = wholeArray.slice(lenOfFirstHalf);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const combinedArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      combinedArray.push(arr1.shift());
    } else combinedArray.push(arr2.shift());
  }
  if (arr1.length) combinedArray.push(...arr1);
  if (arr2.length) combinedArray.push(...arr2);
  return combinedArray;
}

function mergeSort(array) {
  /* your code here */
  if (array.length < 2) {
    return array;
  }

  let splitArr = split(array);
  let firstSplitArr = mergeSort(splitArr[0]);
  console.log("first", firstSplitArr);
  let secondSplitArr = mergeSort(splitArr[1]);
  console.log("second", secondSplitArr);
  return merge(firstSplitArr, secondSplitArr);
}
