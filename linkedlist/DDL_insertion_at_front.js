function insertionAtFront(head, node) {
  node.next = head;
  head.prev = node;

  head = node;
  return head;
}
