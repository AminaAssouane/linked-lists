import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let tmp = this.head;

    if (this.head === null) head = new Node(value, null);
    else {
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value, null);
    }
  }
}
