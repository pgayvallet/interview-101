
/*
 Find the squareroot of a given number rounded down to the nearest integer, without using the sqrt function.
 For example, squareroot of a number between [9, 15] should return 3, and [16, 24] should be 4.
 The squareroot of a (non-negative) number N always lies between 0 and N/2.
 */


function sqrt(number) {

    var left  = 1;
    var right = number >> 1;

    while(left <= right) {
        var mid = (left + right) >> 1;
        var square = mid * mid;
        if(square === number) {
            return mid;
        } else if(mid * mid <= number) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left - 1;

}



console.log(3, sqrt(3));
console.log(4, sqrt(4));
console.log(6, sqrt(6));
console.log(9, sqrt(9));
console.log(100, sqrt(100));
console.log(1000, sqrt(1000));