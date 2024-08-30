// Heap sort works by visualizing the array elements as a special type of complete binary tree known as a heap. The process of heapifying an array is repeated until the array is sorted.

function heapSort(arr) {
    let n = arr.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }
  function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  console.log(heapSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]