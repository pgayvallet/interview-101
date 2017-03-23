
module.exports = {
    heapify  : heapify,
    siftDown : siftDown
};

/**
 * Get the parent index of given index (0-based array)
 */
function parentIdx(idx) {
    return (idx - 1) >> 1;
}

/**
 * Get the left child index of given index (0-based array)
 */
function leftChildIdx(idx) {
    return 2 * idx + 1;

}

/**
 * Get the right child index of given index (0-based array)
 */
function rightChildIdx(idx) {
    return 2 * idx + 2;
}

/**
 * Creates a max heap inplace from given array
 *
 * @param array
 */
function heapify(array) {
    var lastIdx = array.length -1;
    for(var i = parentIdx(lastIdx); i >= 0; i--) {
        //console.log("siftDown on index : " + i);
        siftDown(array, i, lastIdx);
    }
}

function siftDown(array, index, end) {

    var current = index;

    while(leftChildIdx(current) <= end) { // while current has at least one child

        var child = leftChildIdx(current);
        if(child + 1 <= end && array[child + 1] > array[child]) { // if right child exist and is greater than left child
            child = child + 1;
        }

        if(array[child] > array[current]) {
            var tmp = array[child];
            array[child] = array[current];
            array[current] = tmp;
            current = child;
        } else {
            return;
        }
    }
}



/*
var array = [1, 2, 3, 5, 7, 1, 9];
heapify(array);
console.log(JSON.stringify(array));
*/