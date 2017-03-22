"use strict";

module.exports = {

    build : function(array) {
        if(array.length === 0) {
            return null;
        }

        let head = node(array[0]);
        let previous = head;
        let current;

        for(let i=1; i<array.length; i++) {
            current = node(array[i]);
            previous.next = current;
            previous = current;
        }

        function node(value, next) {
            return {
                value : value,
                next  : next || null
            }
        }

        return head;
    },

    export : function(ll) {
        if(ll == null) {
            return [];
        }
        let array = [];
        while(ll != null) {
            array.push(ll.value);
            ll = ll.next
        }
        return array;
    }

};