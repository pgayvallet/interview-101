

function countBites(number) {
    let count = 0;
    while(number > 0) {
        count++;
        number >>= 1;
    }
    return count;
}

let add = function(a, b) {

    var sum   = a,
        carry = b;

    while(carry !== 0) {
        let nextCarry = (sum & carry) << 1;
        sum = sum ^ carry;
        carry = nextCarry;
    }

    return sum;
};

let substract = function(a, b) {
    return add(a, ~b + 1);
};

let divide = function(divident, divisor) {

    let dividentLength = countBites(divident);
    let divisorLength = countBites(divisor);
    let offset = dividentLength - divisorLength;

    let rest = divident;
    let result = 0;

    for(let i=offset; i >= 0; i--) {
        if( (divisor << i) <= rest) {
            result |= (1 << i);
            rest -= divisor << i;
        }
    }

    return result;
};

let multiply = function(a, b) {
    let result = 0;

    while(b > 0) {
        if(b & 1 === 1) {
            result += a;
        }
        a <<= 1;
        b >>= 1;
    }

    return result;
};