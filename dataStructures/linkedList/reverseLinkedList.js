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

// Algorithm
// We use Three Pointers to reverse a List.
// The Three Pointers are Previous, Current and Next.
// Initialize Current pointer to Head.
// Traverse till the end of the List.
// Initialize the Previous pointer be null since there is nothing before head.
// At Each index, We have to know the next node. for traversing forward.
// Use Next to store the curr.next
// Now to Reverse the list. The current pointer’s next have to point the previous node.
// Now we have reversed the index. We have to repeat this step till the end of the list.
// We have to simply move one step ahead.
// For that, The current pointer becomes the previous pointer.
// The next pointer becomes the current.
function reverseLinkedList3Pt(head) {
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

//Tortoise & Hare Approach between 2 points in place

// Algorithm
// Traverse till the mth node. Make it Current Node.
// Make the m-1 node as a start node.
// The Start Node indicates the start of the k-nodes that you have to reverse.
// Then you have Reverse the List from m to n.
// Now you have to link the start node to the last node of the reversed node.
// Link the Last Node to the current nth node.
// Return the List.

function reverseLinkedList2Pt(head, m, n) {
  let current = head;
  let start = null;

  while (m > 1) {
    start = current;
    current = current.next;
    m--;
    n--;
  }

  let tail = current;
  let prev = null;

  while (n > 0) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    n--;
  }

  if (start !== null) {
    start.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;
  return head;
}

// Test the function
// let reversedHead = reverseLinkedList3Pt(head);
let reversedHead = reverseLinkedList2Pt(head, 2, 4);
// Output the reversed list
let current = reversedHead;
while (current != null) {
  console.log(current.val);
  current = current.next;
}
