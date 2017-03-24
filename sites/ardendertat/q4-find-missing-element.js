

/*
 There is an array of non-negative integers. 
 A second array is formed by shuffling the elements of the first array and deleting a random element. 
 Given these two arrays, find which element is missing in the second array.
 */


function findMissingElement(initial, altered) {
    
    // basic approach would be to sort both array, iterate on the first, check for each element if present at same position in second
    // this would allow a o(n log n) resolution.
    
    // but it's possible to resolve in linear with a basic bit operation : using XOR on all element of both array, the results will be the missing element ( X ^ X === 0 )

    var sum = 0;

    for(var i=0; i< initial.length; i++) {
        sum ^= initial[i];
    }

    for(var j=0; j< altered.length; j++) {
        sum ^= altered[j];
    }

    return sum;
}


console.log(findMissingElement([1, 2, 3], [3, 2]));
console.log(findMissingElement([1, 3, 2, 7], [1, 7, 2]));