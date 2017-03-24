"use strict";

// given an array [a1, a2, ... an, b1, b2, ... bn, c1, c2, ... cn]
// convert it to [a1, b1, c1, a2, b2, c2 .... an, bn, cn]
// convertion must be done in-place, using constant extra-space



function convertArray(array) {

    let N = array.length / 3;


    // basic approach by constructing a new array. space = o(n), which is not allowed by the statement

    let newArray = new Array(array.length);

    for(let i=0; i<N; i++) {
        newArray[3 * i] = array[i];
        newArray[3 * i + 1] = array[N + i];
        newArray[3 * i + 2] = array[2 *N + i];
    }

    // then we extract the f(x)

    let getIndex = function(newPos) {
        return (newPos % 3) * N + parseInt((newPos / 3));
    };

    for(let i=0; i<array.length; i++) {
        newArray[i] = array[getIndex(i)];
    }

    // we can even reverse the function

    let reverseGetIndex = function(origPos) {
        return (origPos % 3) * N + parseInt((origPos / 3));

    };

    // the function is an involution : f(f(x)) = x

    for(let i=0; i<array.length; i++) {
        newArray[reverseGetIndex(i)] = array[i];
    }

    // attempt to do it inline

    // here, we find, for each element, the first non-swapped index (aka swapIndex >= i)
    // and we swap with this one

    for(let i=0; i <array.length; i++) {
        let swapIndex = getIndex(i);
        while (swapIndex < i) {
            swapIndex = getIndex(swapIndex);
        }
        let tmp = array[swapIndex];
        array[swapIndex] = array[i];
        array[i] = tmp;
    }

    return array;

    /*
    return array.map(function(e, i) {
        return array[getIndex(i)]
    });
    */

    //return newArray;
}


// let s = new Set();

let array = [1, 2, 3, 4, 5, 6];  // expected : [1, 4, 7, 2, 5, 8, 3, 6, 9]
let result = convertArray(array);

console.log(JSON.stringify(array) + " -> " + JSON.stringify(result));
