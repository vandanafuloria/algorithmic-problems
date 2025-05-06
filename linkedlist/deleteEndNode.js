class Node {
  constructor(data) {
    // Data part of the node
    this.data = data;
    this.next = null;
  }
}

function printList(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.data + " -> ";
    curr = curr.next;
  }
  console.log(result + "null");
}

function findLength(head) {
  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }
  return count;
}

// function deleteEndNode(head) {
//   let curr = head;
//   if (curr == null) return head;

//   const len = findLength(head);

//   if (len == 1) return null;

//   curr = head;

//   // Stop at second last node
//   while (curr.next && curr.next.next !== null) {
//     curr = curr.next;
//   }

//   // Remove last node
//   curr.next = null;+
//   return head;
// }

// function deleteAtBegining(head) {
//   if (head == null) return null;
//   head = head.next;

//   return head;
// }

function deleteList(head) {
  while (head) {
    head = head.next;
  }
  return head;
}

function main() {
  const node1 = new Node(10);

  const node2 = new Node(20);

  node1.next = node2;

  const node3 = new Node(30);
  node2.next = node3;

  const node4 = new Node(40);
  node3.next = node4;

  const head = node1;
  //   printList(head);
  //   const y = deleteAtBegining(head);
  const emptyList = deleteList(head);
  printList(emptyList);
}

main();

// const x = deleteEndNode(node1);
