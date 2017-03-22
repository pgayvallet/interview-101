

function swap(array, a, b) {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}


function partition(array, left, right, pivotIdx, compareFn) {

    let pivot = array[pivotIdx];

    let store = left;

    swap(array, pivotIdx, left);

    for(let i = left + 1; i <= right; i++) {
        if(compareFn(array[i], pivot) < 0) {
            store++;
            swap(array, store, i);
        }
    }

    swap(array, left, store);

    return store;
    


    // This approach is more stable, as it wont move an element if it's not required, by using left and right cursors.
    // But i simply cant make it works for borderline case (aka 2 element pivot included sections)

    /*
    swap(array, pivotIdx, left);

    let i=left + 1;
    let j=right;

    while(i <= j) {
        while(compareFn(array[i], pivot) <= 0 && i <= j) {
            i++;
        }
        while(compareFn(array[j], pivot) >= 0 && j >= i) {
            j--;
        }
        if(i <= j) {
            swap(array, i, j);
        } else {
            break;
        }
    }

    swap(array, left, i);

    return i;
    */
}


function quicksort(array, begin, end, compareFn) {

    if(end - begin < 1) {
        return;
    }

    let pivotIdx = parseInt( (begin + end) / 2 ); // arbitrary

    let newPivot = partition(array, begin, end, pivotIdx, compareFn);

    quicksort(array, begin, newPivot - 1, compareFn);
    quicksort(array, newPivot + 1, end, compareFn);
}

function defaultCompareFn(a, b) {
    return a - b;
}

module.exports = {

    quicksort : function(array, compareFn) {
        quicksort(array, 0, array.length -1, compareFn || defaultCompareFn);
        return array;
    }
    
};
