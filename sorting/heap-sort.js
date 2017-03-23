"use strict";

var heap = require("../utils/max-heap");

var heapify = heap.heapify;
var siftDown = heap.siftDown;

/*
    Heap sort given array
 */
function heapSort(array) {

    // first we creates an in-place max-heap from the array.
    heapify(array);

    // at start, heap takes all the array
    var heapEnd = array.length -1;

    // while the heap is not empty
    while(heapEnd > 0) {

        // swap the head ( biggest heap value ) with the smallest index out of the heap
        var tmp = array[0];
        array[0] = array[heapEnd];
        array[heapEnd] = tmp;

        // siftDown the 'new' unordered head to revalidate the heap
        siftDown(array, 0, heapEnd - 1);

        heapEnd--;
    }

}


var array = [1, 7, 2, 12, 5, 3, 2, 1, 9];
heapSort(array);
console.log(JSON.stringify(array));