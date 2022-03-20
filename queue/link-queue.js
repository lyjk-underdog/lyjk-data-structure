class Node {
    constructor(data = '', next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedQueue {

    head = null;
    tail = null;

    enqueue(val) {
        let node = new Node(val);

        if (this.head === null && this.tail === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        return true;
    }

    dequeue() {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head.data;
        if (this.head === this.tail) this.head = this.tail = null;
        else this.head = this.head.next;

        return temp;
    }
}
