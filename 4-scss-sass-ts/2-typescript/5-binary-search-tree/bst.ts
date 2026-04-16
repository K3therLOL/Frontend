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
            } else if (cur.key < key && cur.right === null) {
                cur.right = new node(key);
                return;
            } else if (cur.key > key && cur.left !== null) {
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

    height(): number {
        if(this.head === null) {
            return 0;
        }

        return this.cntHeight(this.head);
    }

    private cntHeight(node: node | null): number {
        if (node === null) {
            return 0;
        }

        const leftHeight: number = this.cntHeight(node.left) + 1;
        const rightHeight: number = this.cntHeight(node.right) + 1;

        return leftHeight > rightHeight ? leftHeight : rightHeight;
    }

    delete(key: number): void {
        if (this.head === null) {
            return;
        }

        let targetNode: node | null = this.head;
        let parentNode: node | null = null;
        while(targetNode !== null) {
            if(key < targetNode.key) {
                parentNode = targetNode;
                targetNode = targetNode.left;
            } else if(key > targetNode.key) {
                parentNode = targetNode;
                targetNode = targetNode.right;
            } else {
                break;
            }
        }
        if(targetNode === null) {
            return;
        }

        if(targetNode.left === null && targetNode.right === null) {
        }
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
console.log(t.height());
t.print();
