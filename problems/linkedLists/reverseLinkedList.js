class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
// console.log(reverseLinkedList(head));

//TC: O(N)
//SC: O(1)
const mnReversalLL = function (head, m, n) {
  let currentNode = head;
  let currentPosition = 1;
  let start = head;

  while (currentPosition < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }

  let newList = null;
  let tail = currentNode;

  while (currentPosition >= m && currentPosition <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPosition++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) return head;
  else {
    return newList;
  }
};

let reverseMN = mnReversalLL(head, 2, 4);
let current = reverseMN;
while (current != null) {
  console.log(current.val);
  current = current.next;
}
