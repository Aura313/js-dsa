class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // we can do this to maintain the order
    // this.insertTime = Date.now();
  }
}
//using min heap ,if max heap is needed reverse checks with > instead of < for element's priority
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elem = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (elem.priority >= parent.priority) break;

      this.values[parentIdx] = elem;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const elem = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < elem.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < elem.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = elem;
      idx = swapIdx;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue('Common cold', 5);
ER.enqueue('Gunshot wound', 1);
ER.enqueue('High Fever', 4);
ER.enqueue('Broken Arm', 2);
ER.enqueue('Glass in foot', 3);
console.log(ER, 'PriorityQueue');
//   41, 39, 33, 18, 27, 12
