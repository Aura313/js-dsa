//piece of data - val
//reference to the next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there!");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");
// console.log(first)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  pop() {
    if (!this.head) return undefined; //anyone of the two
    // if(this.length === 0) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let curr = this.head;
    this.head = curr.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let curr = this.head;
    while (count !== idx) {
      curr = curr.next;
      count++;
    }

    return curr;
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();
    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr, 'ahs');
  }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('its');
list.push('me');
list.push('goodbye');

// console.log(list.remove(3), 'remove');
console.log(list.print(), 'list');
console.log(list.reverse(), 'reverse list');
console.log(list.print(), 'list');
// console.log(list.get(0), 'get');
// console.log(list.insert(0, 'oooooo'), 'insert');
// console.log(list.set(7, 'oooooo'), 'set');
// console.log(list.get(0), 'get');
// console.log(list.unshift('hey'), 'shift');

// console.log(list, 'list');
// console.log(list.shift(), 'shift');
// console.log(list.pop(), 'pop');
// console.log(list, 'list');
