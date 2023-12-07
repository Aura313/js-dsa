class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(elem) {
    this.values.push(elem);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const elem = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (elem <= parent) break;

      this.values[parentIdx] = elem;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;
    this.sinkDown();
    return max;
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
        if (leftChild > elem) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > elem) ||
          (swapIdx !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap, 'heap');
