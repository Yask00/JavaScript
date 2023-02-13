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

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1]
                array[j+1] = temp
            }
        }
        console.log(array);
    }
}

var array = [23, 43, 12, 56, 35];
bubbleSort(array);
// Output:
// [ 12, 23, 35, 43, 56 ] //sorted array

var array = [56, 43, 35, 23, 12];
bubbleSort(array);
// Output:
// [ 12, 23, 35, 43, 56 ] //sorted array