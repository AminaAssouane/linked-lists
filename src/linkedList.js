import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.head = new Node(value, null);
    else {
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value, null);
    }
  }

  prepend(value) {
    if (this.head === null) this.head = new Node(value, null);
    else {
      this.head = new Node(this.head.value, this.head);
    }
  }

  size() {
    if (this.head === null) return 0;
    let tmp = this.head;
    let i = 0;
    while (tmp !== null) {
      i++;
      tmp = tmp.next;
    }
    return i;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;
    else {
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      return tmp;
    }
  }

  at(index) {
    if (index >= this.size()) return null;
    else {
      let tmp = this.head;
      for (let i = 0; i < index; i++) {
        tmp = tmp.next;
      }
      return tmp;
    }
  }

  pop() {
    if (this.head === null || this.size() === 1) return null;
    else {
      let prev = null;
      let curr = this.head;
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
    }
  }

  contains(value) {
    if (this.head === null) return false;
    else {
      let tmp = this.head;
      while (tmp.value !== value && tmp !== null) {
        tmp = tmp.next;
      }
      if (tmp === null) return false;
      else return true;
    }
  }

  find(value) {
    if (this.head === null) return null;
    else {
      let index = 0;
      let tmp = this.head;
      while (tmp.value !== value && tmp !== null) {
        index++;
        tmp = tmp.next;
      }
      if (tmp === null) return null;
      else return index;
    }
  }

  toString() {}
}
