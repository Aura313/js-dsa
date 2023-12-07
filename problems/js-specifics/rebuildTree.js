class TreeNode {
    constructor(id) {
      this.id = id;
      this.children = [];
    }
  }
  
  function rebuildTree(nodeList) {
    const nodeMap = new Map(); // Map to store nodes by their IDs
  
    // Helper function to create or retrieve a node by its ID
    function getOrCreateNode(id) {
      if (!nodeMap.has(id)) {
        nodeMap.set(id, new TreeNode(id));
      }
      return nodeMap.get(id);
    }
  
    // Parse the input nodeList and build the tree
    for (const nodeData of nodeList) {
      const parentId = nodeData[0];
      const parentNode = getOrCreateNode(parentId);
  
      for (let i = 1; i < nodeData.length; i++) {
        const childId = nodeData[i];
        const childNode = getOrCreateNode(childId);
        parentNode.children.push(childNode);
      }
    }
  
    // Find and return the root node (assuming there's only one root)
    let root = null;
    console.log({nodeMap})
    for (const node of nodeMap.values()) {
      if (!nodeMap.has(node.id)) {
        root = node;
        break;
      }
    }
  
    return root;
  }
  
  // Example usage:
  const nodeList = [
    ['1', '2', '3'],
    ['2', '4', '5'],
    ['3', '6'],
    ['4', '7'],
    ['5', '8'],
  ];
  
  const root = rebuildTree(nodeList);
  console.log(root);
  