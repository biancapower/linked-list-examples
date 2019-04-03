"use strict";
/*
 * Queue data structure (FIFO - first in first out)
 *
 * public methods:
 *
 *   add(i)    adds item i to the end queue
 *   remove()  removes an item from the front of the queue
 *             and returns it
 *             - if there are no items in the queue,
 *               return undefined
 *   length()  returns current list length
 */

class Queue {

    constructor() {
        this.qLength = 0;
    }

    add(item) {
        this.qLength++;
    }

    remove() {
        if (this.qLength === 0) {
            return undefined;
        }
        this.qLength--;
    }

    length() {
        return this.qLength;
    }
}


module.exports = Queue;
