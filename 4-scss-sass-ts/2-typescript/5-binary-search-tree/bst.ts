export class node {
    key:   number;
    left:  node | null;
    right: node | null;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
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
        let parentNode: node | null = null;
        let targetNode: node | null = this.head;

        // searching for node
        while (targetNode !== null && targetNode.key !== key) {
            parentNode = targetNode;
            targetNode = key < targetNode.key ? targetNode.left : targetNode.right;
        }

        if (targetNode === null) { // not found
            return; 
        }

        if (targetNode.left !== null && targetNode.right !== null) {
            let replacementParent: node = targetNode;
            let replacement: node = targetNode.left;

            while (replacement.right !== null) {
                replacementParent = replacement;
                replacement = replacement.right;
            }

        
            targetNode.key = replacement.key;

            targetNode = replacement;
            parentNode = replacementParent;
        }

        // 0 or 1 children now
        const child = targetNode.left ?? targetNode.right;

        if (parentNode === null) {
            this.head = child;
        } else if (parentNode.left === targetNode) {
            parentNode.left = child;
        } else {
            parentNode.right = child;
        }
    }

    update(oldKey: number, newKey: number): void {
        if (this.search(oldKey) !== null) {
            this.delete(oldKey);
            this.insert(newKey);
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
