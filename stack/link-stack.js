class Node {
    constructor(data = '', next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedStack {

    top = null;

    push(val) {
        let node = new Node(val, this.top);
        this.top = node;
        return true;
    }

    pop() {
        if (this.top === null) return null;
        let temp = this.top;
        this.top = this.top.next;
        return temp.data;
    }
}