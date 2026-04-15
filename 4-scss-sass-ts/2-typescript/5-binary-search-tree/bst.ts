class node {
    key:   any;
    left:  node | null;
    right: node | null;

    constructor(key: any) {
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

    insert(key: any): void {
        if (this.head === null) {
        }
    }
}
