import BinarySearchTree from '../../dataStructures/trees/bst.js';
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const levelOrder = (root) => {
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
      currentLevel.push(node.value);
    }
    res.push(currentLevel);
  }

  return res;
};
console.log(levelOrder(tree.root));
