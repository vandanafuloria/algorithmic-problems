function insertionSort(arr) {
  // for loop run from left to right direction

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    // while loop will run from right to left;

    while (j >= 0 && arr[j] > temp) {
      // swapping
      arr[j + 1] = arr[j];
      j--;
    }
    // ensuring after swap add temp value to the correct position;
    arr[j + 1] = temp;
  }
  return arr;
}
