export interface Sortable {
  compare: (leftIndex: number, rightIndex: number) => boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
  length: number;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract get length(): number;

  abstract swap(leftIndex: number, rightIndex: number): void;

  sort() {
    const { length } = this;

    for (let index = 0; index < length; index++) {
      for (let j = 0; j < length - index - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
