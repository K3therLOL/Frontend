class node {
    key:   number;
    left:  node | null;
    right: node | null;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    head: node | null; 
    
    constructor() {
        this.head = null;
    }

    insert(key: number): void {
        if (this.head === null) {
            this.head = new node(key);
            return;
        }

        let cur = this.head;
        while(cur !== null) {
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
            } else if (cur.key < key && cur.right !== null) {
                cur = cur.right;
            } else {
                return;
            }
        }
    }

    search(key: number): node | null {
        if(this.head === null) {
            return null;
        }

        let cur : node | null = this.head;
        while(cur !== null) {
            if (key < cur.key) {
                cur = cur.left;
            } else if (key > cur.key) {
                cur = cur.right; 
            } else {
                return cur;
            }
        }

        return null;
    }

    print(): void {
        this.printNode(this.head, 0);
    }

    private printNode(node: node | null, depth: number): void {
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
