//importing BST
import BinarySearchTree from './bst.js';
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

function bfs() {
  let data = [];
  let queue = [];
  let node = tree.root;
  queue.push(node);
  while (queue.length) {
    node = queue.shift();
    data.push(node.value);

    // left and right are for binary search tree for any other kind
    // we could loop over all the children
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return data;
}

console.log(bfs(), 'BFS');
