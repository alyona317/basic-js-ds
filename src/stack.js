const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = []; // Массив для хранения элементов стека
  }

  // Добавление элемента в стек
  push(element) {
    this.stack.push(element);
  }

  // Возвращает верхний элемент стека без его удаления
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // Удаляет верхний элемент стека и возвращает его
  pop() {
    return this.stack.pop();
  }
}

module.exports = {
  Stack
};
