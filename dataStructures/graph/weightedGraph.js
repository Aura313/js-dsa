class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  //Same as an unweighted Graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    //storing the edge with weight
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
}

let wg = new WeightedGraph();
wg.addVertex('A')
wg.addVertex('B')
wg.addVertex('C')

wg.addEdge('A', 'B', 9)
wg.addEdge('A', 'C', 5)
wg.addEdge('B', 'C', 7)

console.log(wg.adjacencyList);
