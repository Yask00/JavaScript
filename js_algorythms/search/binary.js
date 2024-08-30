// Binary search uses the "divide and conquer" strategy. It divides a sorted list into two halves and compares the target value to the middle element. If a match is found, the middle element's location is returned.

function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      console.log(middle);
      if (arr[middle] === x) {
        console.log("Middle:", middle);
        return middle;
      } else if (arr[middle] < x) {
        left = middle + 1;
        console.log("left:", left, "right:", right);
      } else {
        right = middle - 1;
        console.log("right:", right, "left:", left);
      }
    }
    return -1;
  }

  console.log(binarySearch([1, 2, 3, 4, 5, 8], 4)); // 3