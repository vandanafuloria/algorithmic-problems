function merge(arr, l, mid, h) {
  const temp = [];
  let left = l;
  let right = mid + 1;

  while (left <= mid && right <= h) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= h) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = l; i <= h; i++) {
    arr[i] = temp[i - l];
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) return;
  const mid = Math.floor((l + r) / 2);

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

let arr = [20, 50, 10, 400, 600, 90, 5];
mergeSort(arr, 0, 7);
console.log(...arr);
