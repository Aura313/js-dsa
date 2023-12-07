import Graph from './graph.js';
let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

function dfsTraversalRecursive(start) {
  let results = [];
  let visitedMap = {};
  const adjacencyList = g.adjacencyList;
  //helper function
  function dfs(vertex) {
    //base case
    if (!vertex) return null;
    visitedMap[vertex] = true;
    results.push(vertex);

    adjacencyList[vertex].forEach((neighbor) => {
      if (!visitedMap[neighbor]) return dfs(neighbor);
    });
  }

  dfs(start);
  return results;
}

function dfsTraversalIterative(start) {
  let results = [];
  let visited = {};
  let stack = [start];
  visited[start] = true;
  let currentVertex;

  while (stack.length) {
    console.log(stack, 'stack');
    currentVertex = stack.pop();
    results.push(currentVertex);

    g.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return results;
}

function bfsTraversal(start) {
  let queue = [start];
  let results = [];
  let visited = {};
  visited[start] = true;
  let currentVertex;

  while (queue.length) {
    currentVertex = queue.shift();
    results.push(currentVertex);
    
    g.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return results;
}

// console.log(dfsTraversalRecursive('A'));
// console.log(dfsTraversalIterative('A'));
console.log(bfsTraversal('A'), "bfsTraversal");
