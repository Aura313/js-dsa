//importing BST
import BinarySearchTree from './bst.js';
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

function dfs_preOrder() {
  let visited = [];
  let curr = tree.root;
  function traverse(node) {
    visited.push(node);
    if (node.left != null) traverse(node.left);
    if (node.right != null) traverse(node.right);
  }

  traverse(curr);
  return visited;
}

function dfs_postOrder() {
  let visited = [];
  let curr = tree.root;
  function traverse(node) {
    if (node.left != null) traverse(node.left);
    if (node.right != null) traverse(node.right);
    visited.push(node.value);
  }

  traverse(curr);
  return visited;
}

function dfs_inOrder() {
  let visited = [];
  let curr = tree.root;
  function traverse(node) {
    if (node.left != null) traverse(node.left);
    visited.push(node.value);
    if (node.right != null) traverse(node.right);
  }

  traverse(curr);
  return visited;
}
// console.log(dfs_preOrder(), 'DFS : dfs_preOrder');
// console.log(dfs_postOrder(), 'DFS : dfs_postOrder');
console.log(dfs_inOrder(), 'DFS : dfs_inOrder');
