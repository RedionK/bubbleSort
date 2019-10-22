function bubbleSort(array) {
  /* your code here */
  if (array.length < 2) {
    return array;
  }
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    let curElem = array[i];
    if (curElem > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swaps++;
    }
  }

  if (swaps > 0) {
    bubbleSort(array);
  }

  return array;
}
