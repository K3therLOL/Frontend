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
(function inorderWalk(root: node | null): void {
    if (root === null) {
        return;
    }
})(t.head);








console.log("All tests successful ended!");
