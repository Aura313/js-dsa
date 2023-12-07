class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let curr = this.root;

      /* METHOD 1 */
      //   let it = true;
      //   while (it) {
      // if(val == curr.value) return undefined;
      //     if (val > curr.value) {
      //       if (curr.right) {
      //         curr = curr.right;
      //       } else {
      //         curr.right = newNode;
      //         it = false;
      //       }
      //     } else {
      //       if (curr.left) {
      //         curr = curr.left;
      //       } else {
      //         curr.left = newNode;
      //         it = false;
      //       }
      //     }
      //   }
      //   return this;

      /* METHOD 1 */
      while (true) {
        // stopping the loop by returning the list
        if (val == curr.value) return undefined;
        if (val < curr.value) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          } else {
            curr = curr.left;
          }
        } else if (val > curr.value) {
          if (curr.right === null) {
            curr.right = newNode;
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
  //returns the node if found
  find(val) {
    if (this.root === null) return false;
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (val < curr.value) {
        curr = curr.left;
      } else if (val > curr.value) {
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return curr;
  }
  //returns true or false
  contains(val) {
    if (this.root === null) return false;
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (val < curr.value) {
        curr = curr.left;
      } else if (val > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  print() {
    if (this.root == null) {
      return null;
    } else {
      const result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      // left and right are for binary search tree for any other kind
      //  we could loop over all the children
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  dfsPreOrder() {
    let data = [];
    let curr = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(curr);
    return data;
  }

  dfsPostOrder() {
    let data = [];
    let curr = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(curr);
    return data;
  }

  dfsInOrder() {
    let data = [];
    let curr = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(curr);
    return data;
  }
}
var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree.dfsInOrder(), 'dfsInOrder');

export default BinarySearchTree;
