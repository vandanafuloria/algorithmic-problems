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
