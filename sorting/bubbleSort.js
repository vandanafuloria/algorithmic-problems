function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) break;
    // no need to check further
  }
  return arr;
}

const a = [4, 5, 12, 3, 64, 1, 0];

const x = bubbleSort(a);
console.log(a);
