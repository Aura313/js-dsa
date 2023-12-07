import BinaryTree from '../../dataStructures/trees/binaryTree.js';
import { TreeNode } from '../../dataStructures/trees/binaryTree.js';
// Create a new binary tree
const tree = new BinaryTree();

// Insert values to create the specified structure
tree.insert(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.left.left.right = new TreeNode(7);
tree.root.left.left.right.left = new TreeNode(8);

const rightSideOfTree = (root) => {
  if (!root) return [];
  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    const currentLength = queue.length;
    const currentLevel = [];
    for (let i = 0; i < currentLength; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      currentLevel.push(node.val);
    }
    res.push(currentLevel[currentLevel.length - 1]);
  }
  return res;
};

console.log(rightSideOfTree(tree.root));
