let bubbleSortContainer = document.getElementById("bubbleSort");
let insertionSortContainer = document.getElementById("insertionSort");
let shellSortContainer = document.getElementById("shellSort");
let quickSortContainer = document.getElementById("quickSort");
let mergeSortContainer = document.getElementById("mergeSort");
let countingSortContainer = document.getElementById("countingSort");

let max = 30;
document.documentElement.style.setProperty("--max-value", max + 1);

let array = new Array(max);




for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * max) + 1;
}


let bubbleSort = new BubbleSortAnim(array,bubbleSortContainer)
let insertionSort = new InsertionSortAnim(array,insertionSortContainer)
let shellSort = new ShellSortAnim(array,shellSortContainer)
let quickSort = new QuickSortAnim(array,quickSortContainer)
let mergeSort = new MergeSortAnim(array,mergeSortContainer)
let countingSort = new CountingSortAnim(array,countingSortContainer)
mergeSort.sortAsc();
quickSort.sortAsc();
shellSort.sortAsc();
bubbleSort.sortAsc();
insertionSort.sortAsc();
countingSort.sortAsc();