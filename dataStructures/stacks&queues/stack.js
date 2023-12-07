class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //add to the beginning - like unshift
  push(val) {
    let newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //remove from the beginning - like shift

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push('Apple');
stack.push('Banana');
stack.push('Strawberry');

// console.log(stack, 'stack after push');
console.log(stack.pop(), 'stack pop');
console.log(stack.pop(), 'stack pop2');
console.log(stack.pop(), 'stack pop3');
console.log(stack.pop(), 'stack pop4');
