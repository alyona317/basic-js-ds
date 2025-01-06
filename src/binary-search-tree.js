const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  // Узел дерева
  createNode(data) {
    return { data, left: null, right: null };
  }

  // Возврат корневого узла
  root() {
    return this.treeRoot;
  }

  // Добавление узла в дерево
  add(data) {
    const newNode = this.createNode(data);

    if (!this.treeRoot) {
      this.treeRoot = newNode;
      return;
    }

    let current = this.treeRoot;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Проверка, существует ли узел с данным значением
  has(data) {
    return !!this.find(data);
  }

  // Поиск узла
  find(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  // Удаление узла
  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data === node.data) {
        // Узел без детей
        if (!node.left && !node.right) return null;
        // Узел с одним ребенком
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // Узел с двумя детьми
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.treeRoot = removeNode(this.treeRoot, data);
  }

  // Возврат минимального значения
  min() {
    if (!this.treeRoot) return null;
    let current = this.treeRoot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  // Возврат максимального значения
  max() {
    if (!this.treeRoot) return null;
    let current = this.treeRoot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
