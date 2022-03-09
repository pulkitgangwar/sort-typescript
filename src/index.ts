import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";

const list = new LinkedList();
const numbers = new NumberCollection([99, 22, 12, -16, 6]);
const strs = new CharacterCollection("zxxba");
list.add(99);
list.add(2);
list.add(3);
list.sort();
numbers.sort();
strs.sort();
console.log(numbers.data, "numbers");
console.log(strs, "strings");
list.print();
