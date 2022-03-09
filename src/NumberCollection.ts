import { Sortable, Sorter } from "./Sorter";

export class NumberCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
