"use strict";

var utils = require("../../utils/tree");

// Given a binary tree, check whether it’s a binary search tree or not.


/**
 * Traverse a tree in binary order.
 * 
 * @param node          The root node of the tree.
 * @param handler       The handler to execute to each node. The handler can returns false to exit the traversing
 * @return {boolean}    true if traverse was completed, false otherwise.
 */
function traverse(node, handler) {
    if(node == null) {
        return true;
    }

    if(traverse(node.left, handler) === false) {
        return false;
    }
    
    if(handler(node) === false) {
        return false;
    }
    
    return traverse(node.right, handler);
}


function checkBinarySearchTree(tree) {

    if(tree == null) {
        return true;
    }

    // Tree is binary search tree if, traversed in order, node[n+1] > node[n]
    
    var previousValue = Number.NEGATIVE_INFINITY;
    var valid = true;

    traverse(tree, function(node) {
        if(node.value < previousValue) {
            valid = false;
            return false;
        }
        previousValue = node.value;
        return true;
    });

    return valid;
}

/*
let tree = utils.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(JSON.stringify(tree));
traverse(tree, function(node) {
   console.log(node.value);
});
*/


let tree2 = utils.fromArray([6, 2, 7, 1, 4, null, null, null, null, 3, 5]);

console.log("valid : ", checkBinarySearchTree(tree2));


//console.log(JSON.stringify(utils.fromArray([1, 2, 3, null, 5, null, 7])));