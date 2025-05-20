# Linkedlist

# Singly Linked List

# Doubly Linked List

**A Doubly Linked List is a type of linked list that allows traversal in both directions—forward and backward—hence the name "doubly." Each node in the list contains two pointers**:

- One pointer that refers to the next node in the sequence.

- Another pointer that refers to the previous node.

- The list has two null references:

_The first node's prev pointer is set to null because there is no node before it_.

_The last node's next pointer is set to null because there is no node after it._

**This bidirectional structure makes it easier to navigate the list in either direction and allows for more flexible insertion and deletion operations compared to a singly linked list.**

![img](https://techvidvan.com/tutorials/wp-content/uploads/2021/06/Doubly-linked-list-in-DS-1.jpg)

`Constructor of doubly linked list`

```javascript
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
```

# Here are some Questions of Doubly linked list

- [Doubly Linked List Formation](DDL.js)
- [linked list to an array list](./DDLList_to_array.js)
- [insetion at fornt](./DDL_insertion_at_front.js) -[insetion at End](./DLL_insertion_at_end.js)
