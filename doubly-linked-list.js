class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      // It is important to set poppedNode.next to null to avoid accessing other values from popped of value.
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const tempHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tempHead.next;
      this.head.prev = null;
      tempHead.next = null;
    }
    this.length--;
    return tempHead;
  }
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
console.log(dll);
