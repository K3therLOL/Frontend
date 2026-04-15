"use strict";
class node {
    key;
    left;
    right;
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    head;
    constructor() {
        this.head = null;
    }
    insert(key) {
        if (this.head === null) {
            this.head = new node(key);
            return;
        }
        let cur = this.head;
        while (cur !== null) {
            if (cur.key > key && cur.left === null) {
                cur.left = new node(key);
                return;
            }
            else if (cur.key < key && cur.right === null) {
                cur.right = new node(key);
                return;
            }
            else if (cur.key > key && cur.left !== null) {
                cur = cur.left;
            }
            else if (cur.key < key && cur.right !== null) {
                cur = cur.right;
            }
            else {
                return;
            }
        }
    }
    //insert(key: number): void {
    //    if (this.head === null) {
    //        this.head = new node(key); // If the tree is empty, make this the root
    //        return;
    //    }
    //    let cur = this.head;
    //    while (cur !== null) {
    //        if (key < cur.key) {
    //            if (cur.left === null) {
    //                cur.left = new node(key); // Insert left
    //                return;
    //            }
    //            cur = cur.left; // Move left
    //        } else if (key > cur.key) {
    //            if (cur.right === null) {
    //                cur.right = new node(key); // Insert right
    //                return;
    //            }
    //            cur = cur.right; // Move right
    //        } else {
    //            return; // Duplicate keys are ignored
    //        }
    //    }
    //}
    search(key) {
        if (this.head === null) {
            return null;
        }
        let cur = this.head;
        while (cur !== null) {
            if (key < cur.key) {
                cur = cur.left;
            }
            else if (key > cur.key) {
                cur = cur.right;
            }
            else {
                console.log("founded");
                return cur;
            }
        }
        return null;
    }
    print() {
        this.printNode(this.head, 0);
    }
    printNode(node, depth) {
        if (node === null) {
            return;
        }
        this.printNode(node.right, depth + 1);
        console.log("    ".repeat(depth) + node.key);
        this.printNode(node.left, depth + 1);
    }
}
const t = new Tree();
t.insert(5);
t.insert(3);
t.insert(2);
t.insert(4);
t.insert(6);
t.insert(7);
console.log(t.search(2));
console.log(t.search(0));
t.print();
