// https://www.scaler.com/topics/bubble-sort-in-javascript/

/* 
Bubble sort is a sorting algorithm that compares adjacent elements and 
swaps them if they do not follow the desired order. 
This algorithm is stable and follows in-place sorting. Easy-to-understand and implement, bubble sort in JavaScript takes O(n^2) time complexity to sort and is 
not the most optimal sorting algorithm possible.

Hence, bubble sort in JavaScript primarily works by comparing each adjacent number 
and swapping them if they are out of the required order, else leaving them as it is.

If arrLength is the number of element in the array, we need to run 
(arrLength-1) loops, i.e from loop = 0 to loop = 5-1 = 4

*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]

// --------------This example  is better because we skip further iterations iff already oredered------------
function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, array is sorted
        if (!isSwapped)
            break;
    }

    return array;
}

// Test the function
const sortedArray = bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]);

//----------------Event better example with no inner loop---------------
const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;

}
