const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
function removeKFromList(l, k) {
  let dummy = new ListNode(0);
  dummy.next = l;
  let current = dummy;

  // Traverse the list
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next; // Skip the node with value k
    } else {
      current = current.next; // Move to the next node
    }
  }

  // Return the modified list, skipping the dummy node
  return dummy.next;
}

// Helper function to print the list for easy visualization
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  return result;
}

module.exports = {
  removeKFromList
};
