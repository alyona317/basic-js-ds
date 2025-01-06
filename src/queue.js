const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Points to the first node in the queue
    this.tail = null; // Points to the last node in the queue
  }

  // Adds a value to the end of the queue
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode; // Link the new node to the end of the queue
    }
    this.tail = newNode; // Update the tail to the new node
    if (!this.head) {
      this.head = newNode; // If the queue was empty, the new node is also the head
    }
  }

  // Removes and returns the value from the head of the queue
  dequeue() {
    if (!this.head) {
      return null; // Queue is empty
    }
    const value = this.head.value;
    this.head = this.head.next; // Move the head to the next node
    if (!this.head) {
      this.tail = null; // If the queue is now empty, reset the tail
    }
    return value;
  }

  // Returns the underlying linked list
  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
