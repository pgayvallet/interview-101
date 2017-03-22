"use strict";

/**
 *
 * Find a duplicate, Space Edition™ BEAST MODE
 In Find a duplicate, Space Edition™, we were given a list of integers where:

 the integers are in the range 1..n
 the list has a length of n+1
 These properties mean the list must have at least 1 duplicate. Our challenge was to find a duplicate number, while optimizing for space. We used a divide and conquer approach, iteratively cutting the list in half to find a duplicate integer in O(n\lg{n})O(nlgn) time and O(1)O(1) space (sort of a modified binary search).

 But we can actually do better. We can find a duplicate integer in O(n)O(n) time while keeping our space cost at O(1)O(1).

 This is a tricky one to derive (unless you have a strong background in graph theory), so we'll get you started:

 Imagine each item in the list as a node in a linked list. In any linked list ↴ , each node has a value and a "next" pointer. In this case:

 The value is the integer from the list.
 The "next" pointer points to the value-eth node in the list (numbered starting from 1). For example, if our value was 3, the "next" node would be the third node.
 *
 **/


/*
  Examples : 
 [3, 4, 2, 3, 1, 5]
 [3, 1, 2, 2]
 [4, 3, 1, 1, 4]
 */


function findDuplicate(list) {

    // [3, 1, 2, 2]

    let head = list.length; // starting at index=1

    function value(index) {
        return list[index-1];
    }

    function next(index) {
        return list[index-1];
    }
   
    
    // Integers in range 1...n , list of size N+1
    // Which means.

    // first, we seek an index which is inside the loop

    // note : we know for a fact that there is a loop, so walking {length} step is easier than what I did.

    let walker = head,
        runner = head;
    do {
        walker = next(walker);
        runner = next(next(runner));
        track();
    } while(walker != runner);

    console.log("inside a loop at position : ", walker);

    // then we loop again to count the length of the loop

    let length = 0;
    do {
        walker = next(walker);
        length++;
        track();
    } while(walker != runner);

    console.log("looped in " + length + " cycles");

    // we start back from the start with an offset of length, moving them at the same speed. This way, the first encounter

    function xNext(index, count) {
        for(let i= 0; i<count; i++) {
            index = next(index);
        }
        return index;
    }

    walker = head;
    runner = xNext(head, length);

    track();

    while(walker != runner) {
        walker = next(walker);
        runner = next(runner);
        track();
    }

    let loopStart = walker;

    console.log("found the start of the loop : ", loopStart);
    
    // Them we start a last time ( we could start at current position or at head here )

    walker = head;

    while(next(walker) != loopStart) {
        walker = next(walker);
    }

    // we got it

    let duplicate = value(walker);

    console.log("duplicate found : ", duplicate);

    function track() {
        console.log("walker at " + walker + " . runner at " + runner);
    }


}


console.log(findDuplicate([3, 4, 2, 3, 1, 5]));