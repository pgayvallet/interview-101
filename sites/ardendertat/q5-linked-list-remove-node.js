"use strict";

let utils = require("../../utils/linked-list");

// basic exercice : given a linked list and a value, remove all node containing the value

function linkedListRemove(list, value) {

    if(list == null) {
        return null;
    }

    let head = list;

    while(head != null && head.value === value) {
        head = head.next;
    }

    if(head == null) {
        return null;
    }

    let current = head;

    while(current != null && current.next != null) {
        if(current.next.value === value) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    
    return head;

    //return list;

}



let samples = [
    [],
    [1],
    [5],
    [1, 5, 1],
    [1, 5],
    [5, 5, 5],
    [5, 1, 5],
    [2, 5, 1]
];


samples.forEach(function(sample) {

    let result = linkedListRemove(utils.build(sample), 5);
    console.log(JSON.stringify(sample) + " -> " + JSON.stringify(utils.export(result)));

});