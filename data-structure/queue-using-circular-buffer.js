

/**
 * Implementation of fixed-size Queue (FIFO) using a circular buffer array approach
 */


function Queue(size) {

    var buffer = new Array(size);

    var head = 0;        // the END of the queue, where elements will be removed
    var tail = 0;        // the BEGINNING of the queue, where elements will be added

    var full = false;
    var empty = true;

    this.enqueue = function(value) {
        if(!full) {
            buffer[tail] = value;
            tail = (tail + 1) % size;

            full = tail === head;
            empty = false;

        } else {
            console.log("************ queue is full");
        }
        repr();
    };

    this.dequeue = function() {
        var value;
        if(!empty) {
            value  = buffer[head];
            buffer[head] = null;
            head = (head + 1) % size;

            empty = head === tail;
            full = false;
        } else {
            value = null;
        }
        repr();
        return value;
    };

    this.peek = function() {
        return buffer[head];
    };

    repr();

    function repr() {
        console.log("****");
        console.log(JSON.stringify(buffer));
        console.log("full : " + full + ", empty : " + empty );
        console.log("tail : " + tail + ", head : " + head + ", length : " + getLength());
        console.log("\n");
    }

    function getLength() {
        return empty ? 0 : full ?  size : tail >= head ? tail - head : size + tail - head;
    }

}

var q = new Queue(3);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);
q.dequeue();
q.dequeue();
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);

/*
q.enqueue(1);
q.enqueue(2);
q.dequeue();
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.enqueue(5);
q.dequeue();
q.dequeue();
q.enqueue(6);
*/