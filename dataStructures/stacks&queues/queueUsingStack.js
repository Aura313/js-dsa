class QueueUsingStack {
  constructor() {
    this.stack = [];
    this.que = [];
  }

  enqueue(val) {
    this.stack.push(val);
  }

  dequeue() {
    if (this.que.length === 0) {
      while (this.stack.length > 0) {
        this.que.push(this.stack.pop());
      }
    }
    return this.que.pop();
  }

  peek() {
    if (this.que.length === 0) {
      while (this.stack.length > 0) {
        this.que.push(this.stack.pop());
      }
    }
    return this.que[this.que.length - 1];
  }

  empty() {
    return this.stack.length === 0 && this.que.length === 0;
  }
}

let q = new QueueUsingStack();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log(q.enqueue(5));
console.log('stack ===>', q.stack);

console.log(q.dequeue());
console.log('queue ===>', q.que);
console.log('peek ===>', q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
// console.log(q.dequeue());
console.log('peek2 ===>', q.empty());
// console.log('AFTER ==>', q.stack);
