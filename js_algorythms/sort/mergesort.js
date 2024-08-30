// Merge sort uses the "divide and conquer" strategy. It divides an array into two halves, sorts each half, and then merges the sorted halves back together.

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    console.log(left, right);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    console.log("merge", left, right);
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

console.log(mergeSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]