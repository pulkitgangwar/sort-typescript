import { Sorter } from "./Sorter";

class LinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: LinkedListNode | null = null;

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let current = this.head;
    while (current.next) {
      length++;
      current = current.next;
    }

    return length;
  }

  add(data: number): void {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
    return;
  }

  at(index: number): LinkedListNode {
    if (!this.head) throw new Error("Index out of bounds");

    let listIndex = 0;
    let current: LinkedListNode | null = this.head;
    while (current) {
      if (listIndex === index) {
        return current;
      }
      listIndex++;
      current = current.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log("list is empty");
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
