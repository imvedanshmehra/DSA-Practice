class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      // If the head is null( list is empty ), then assign newNode to both head & tail.
      // this.head and this.tail refers to the same object
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //   ****** SECOND APPROACH ******

  push1(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current?.next) {
      newTail = current;
      current = current?.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current?.next;
    this.length--;

    if (this?.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentHead = this?.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
  }

  get(index) {
    let currentIndex = 0;
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      while (this?.head?.next) {
        if (currentIndex === index) {
          return current;
        } else {
          current = current?.next;
        }
        currentIndex++;
      }
    }
  }
  set(index, val) {
    const node = this.get(index);
    if (!node) {
      return false;
    } else {
      node.val = val;
    }
  }
  insert(index, val) {
    const newNode = new Node(val);
    if (index > this.length || index < 0) {
      return false;
    } else if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const nodeAtIndexBefore = this.get(index - 1);
      const prevNext = nodeAtIndexBefore.next;
      nodeAtIndexBefore.next = newNode;
      newNode.next = prevNext;
    }
    this.length++;
  }
  remove(index) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      const prev = this.get(index - 1);
      prev.next = prev.next.next;
    }
    this.length--;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.reverse();
console.log(ll);
