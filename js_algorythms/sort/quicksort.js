// Quicksort is a popular sorting algorithm that performs n log n comparisons on average when sorting an array of n elements. It is a more efficient and faster sorting algorithm.


//Quick sort is a divide-and-conquer algorithm that sorts an array by choosing a pivot element and partitioning the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot. The two subarrays are then recursively sorted until the entire array is sorted.

function quickSort(arr) {
    console.log(arr);
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    console.log("left:", left, "right:", right);
    return quickSort(left).concat(pivot, quickSort(right));
  }

  console.log(quickSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]