"use strict";

module.exports = {

    /**
     * Generates a binary tree from given array.
     * First element is head, then the two next are the left and right branches of the head. Then the 4 next are the branches of the left and right branches, and so on
     * @param array
     */
    fromArray : function(array) {

        function createTreeNode(array, index) {
            if(index <= array.length) {
                var value = array[index -1];
                if(value != null) {
                    return {
                        value : array[index-1],
                        left  : createTreeNode(array, index * 2),
                        right : createTreeNode(array, index * 2 + 1)
                    }
                }
            }
            return null;
        }

        return createTreeNode(array, 1);

    }

};