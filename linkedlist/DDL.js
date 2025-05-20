class Node {
  constructor(data) {
    // To store the value or data.
    this.data = data;

    // Reference to the previous node
    this.prev = null;

    // Reference to the next node
    this.next = null;
  }
}

function insertionAtFront(head, node) {
  node.next = head;
  head.prev = node;

  head = node;
  return head;
}

function formDoubly(x) {
  let prev = null;
  let head = null;

  for (let el of x) {
    const n = new Node(el); // null-data-null will come form node;
    if (prev !== null) {
      // if not first node then add the next of prev and node prev ;
      prev.next = n;
      n.prev = prev;
    } else {
      // if this is first node, assign it as head;
      head = n;
    }
    prev = n;
  }
  return head;
}

function insertionAtEnd(head, node) {
  let curr = head;
  while (curr) {
    if (curr.next == null) {
      curr.next = node;
      node.prev = curr;
    }
    curr = curr.next;
  }
  return head;
}
const x = [10, 50, 100, 1000, 5900, 60];
const head = formDoubly(x);

function printList(head) {
  //list printing;
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// printList(head);

const node = new Node(500000);

const y = insertionAtEnd(head, node);
printList(y);
