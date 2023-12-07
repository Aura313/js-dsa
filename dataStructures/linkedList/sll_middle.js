/* Given a non-empty, singly linked list with head node head, 
return a middle node of linked list.If there are two middle nodes, 
return the second middle node. */

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
// This approach is called a Two Pointer Approach.
// More Often than not, you will be implementing this approach to solve a LL Problem
// Initialize two Pointers Slow and Fast.
// Traverse till the End of the List based on the Fast pointer.
// For Each iteration, The Slow pointer moves one step while the Fast Pointer moves two Steps.
// So When the Fast Pointer Reaches the End of the List the Slow Pointer will be in the middle of the Linked List

function middleNode(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

let midNode = middleNode(head);
console.log(midNode, 'midnode');
