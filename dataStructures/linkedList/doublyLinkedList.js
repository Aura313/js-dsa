//piece of data - val
//reference to the next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedTail = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return poppedTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //unoptimized if the item is closer to the tail,
  //  takes longer to go from start to end , inDLL we can start from the tail
  getUnOptimized(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let curr = this.head;
    // console.log(curr);
    while (count !== idx) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  //optimized
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count;
    let mid = this.length / 2;
    let curr;
    if (idx <= mid) {
      console.log('Working from START!!!');
      count = 0;
      curr = this.head;
      while (count !== idx) {
        curr = curr.next;
        count++;
      }
    } else {
      console.log('Working from END!!!');
      count = this.length - 1;
      curr = this.tail;
      while (count !== idx) {
        curr = curr.prev;
        count--;
      }
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
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;  

    beforeNode.next = newNode; newNode.prev = beforeNode;
    newNode.next = afterNode; afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removedNode = this.get(idx);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

// let first = new Node(12)
// first.next = new Node(13)
// first.next.prev = first;

// console.log(first, "first")

let list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermoine');
list.push('Severus');
list.push('Sirius');
list.push('Hedwig');
// console.log(list, 'list');
// console.log(list.pop(), 'pop');
// console.log(list.shift(), 'shift');
// console.log(list.unShift(42), 'unshift');
// console.log(list.getUnOptimized(3), 'getUnOptimized');
// console.log(list.get(2), 'get');
// console.log(list.set(0, 'Harry Potter'), 'set');
// console.log(list.insert(11, 'Minerva'), 'insert');
console.log(list.remove(5), 'remove');
// console.log(list, 'list')
