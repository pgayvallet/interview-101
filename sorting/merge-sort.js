


/*
 * First, naive approach :
 * Here, we create new arrays at each iteration, passing them down to the next left and right sort calls.
 * Speed : o(n log n)
 * Memory : o(n log n)
 */

function mergeSort(array) {

    let length = array.length;
    if(length < 2) {
        return array;
    }

    let mid = Math.floor(length / 2);

    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid, length)));
}

function merge(left, right) {

    let sorted = [];

    let i = 0;
    let j = 0;

    while(i < left.length || j < right.length) {
        if(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                sorted.push(left[i]);
                i++;
            } else {
                sorted.push(right[j]);
                j++;
            }
        } else if(i < left.length) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    return sorted;
}



/*
  Second approach. Here, we copy the initial array at startup, and only use the initial and copied array for merging,
  This lower memory requirements from o(n log n) to o(n)
  The trick is to switch which array is the source and which is the target at each recursion.
 */


let mergeSort2 = function(array) {
    let target = array.slice(0);
    sort2(target, 0, array.length, array);
    return array;
};

function sort2(array, begin, end, target) {

    if(end - begin < 2) {
        return;
    }

    let middle = Math.floor((begin + end) / 2);

    sort2(target, begin, middle, array);
    sort2(target, middle, end, array);
    merge2(array, begin, middle, end, target);
}

function merge2(source, begin, mid, end, target) {

    let i = begin;
    let j = mid;

    for(let k=begin; k<end; k++) {
        if(i < mid && j < end) {
            if(source[i] < source[j]) {
                target[k] = source[i];
                i++;
            } else {
                target[k] = source[j];
                j++;
            }
        } else if (i < mid) {
            target[k] = source[i];
            i++;
        } else {
            target[k] = source[j];
            j++;
        }
    }

}