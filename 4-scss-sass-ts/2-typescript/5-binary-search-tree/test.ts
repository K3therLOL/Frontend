import { node, Tree } from "./bst"

const t: Tree = new Tree();
console.assert(t.head === null, "tree should be empty");
console.assert(t.height() === 0, "height should be 0");
t.insert(10);
console.assert(t.head!.key === 10, "tree should has 10 in root");
console.assert(t.height() === 1, "height should be 1");
t.insert(5);
t.insert(15);
console.assert(t.head!.left!.key === 5, "left should be 5");
console.assert(t.head!.right!.key === 15, "left should be 15");
t.head = null;

const nums: number[] = [50, 25, 75, 12, 37, 63, 87, 6, 18, 31, 43, 56, 69, 81, 93];
nums.forEach((num) => {
    t.insert(num);
})
const sorted: number[] = [...nums].sort((a, b) => a - b);
let i: number = 0;
(function inorderWalk(root: node | null): void {
    if (root === null) {
        return;
    }
    inorderWalk(root.left);
    console.assert(sorted[i] === root.key, "Wrong key while inorderWalk");
    i++;
    inorderWalk(root.right);
})(t.head);

console.assert(t.height() === 4, "height should be 4");
t.delete(50);
console.assert(t.head!.key === 43, "head should be 43 after deleting 50");
console.assert(t.search(50) === null, "50 should be gone");
t.delete(31);
t.delete(6);
t.delete(25);
console.assert(t.head!.left!.key === 18, "left key should be 18 after deleting");
t.delete(18);
t.delete(12);
t.delete(37);
console.assert(t.head!.left === null, "no left key now");
t.update(75, 100);
console.assert(t.search(75) === null, "should be no 75 key now");
console.assert(t.search(100) !== null, "should be no 100 key now");
t.delete(43);
console.assert(t.head!.key === 69, "should be 69 in head");

console.log("All tests successful ended!");
