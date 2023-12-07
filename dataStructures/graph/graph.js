//Unweighted Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    //if directed graph we dont need the below statement, we just go from v1 to v2
    //here it's undirected, so 2-way connection
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    //add checks
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((i) => i !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((i) => i !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsTraversalRecursive(start) {
    let results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    //helper function
    function dfs(vertex) {
      //base case
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      //context of this is changed in this fn so we define it in the fn scope above
      //at like 34
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    }

    dfs(start);
    return results;
  }

  dfsTraversalIterative(start) {
    let results = [];
    let visited = {};
    let stack = [start];
    visited[start] = true;
    let currentVertex;

    while (stack.length) {
      console.log(stack, 'stack');
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }

  bfsTraversal(start) {
    let queue = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

export default Graph;
let graph = new Graph();
// graph.addVertex('Tokyo');
// graph.addVertex('Dallas');
// graph.addVertex('Aspen');
// graph.addVertex('Hong Kong');
// graph.addVertex('LA');
// graph.addEdge('Tokyo', 'Dallas');
// graph.addEdge('Tokyo', 'LA');
// graph.addEdge('Hong Kong', 'LA');
// graph.addEdge('Dallas', 'Aspen');
// // graph.removeEdge('Dallas', 'Aspen');
// graph.removeVertex('LA');
// console.log(graph.adjacencyList, 'list');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// console.log(graph.dfsTraversalRecursive('A'));
// console.log(graph.dfsTraversalIterative('A'));
console.log(graph.bfsTraversal('A'), "hhshs bfsTraversal");