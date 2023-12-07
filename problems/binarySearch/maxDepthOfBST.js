import BinarySearchTree from '../../dataStructures/trees/bst.js';
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree, "tree");

///        10 
//       6      15
//    3    8        20
//          
// 
// 

const maxDepth = (root) => {
  let lDepth = 0;
  let rDepth = 0;

  const traverse = (node) => {
    if (!node) return 0;
    if (node.left !== null) {
      lDepth++;
      traverse(node.left);
    }
    if (node.right !== null) {
      rDepth++;
      traverse(node.right);
    }
  };

  traverse(root);
  return Math.max(lDepth, rDepth);
};

console.log(maxDepth(tree.root));
