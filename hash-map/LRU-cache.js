class Node {
    constructor(data = '', pre = null, next = null) {
        this.data = data;
        this.pre = pre;
        this.next = next;
    }
}

class DoublyLinkedList {

    head = new Node(-1);
    tail = new Node(-1);

    constructor() {
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    getTailNode() {
        return this.tail.pre;
    }

    addToHead(node) {
        node.next = this.head.next;
        this.head.next.pre = node;

        this.head.next = node;
        node.pre = this.head;
    }

    remove(node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.next = null;
        node.pre = null;
    }

}

class LRUCache {

    _map = new Map();
    _linkedList = new DoublyLinkedList();
    _stateCount = 0;

    constructor(capacity) {
        this.capacity = capacity;
    }

    set(key, value) {
        if (this._map.has(key)) {
            let node = this._map.get(key);

            node.data.value = value;
            this._linkedList.remove(node);
            this._linkedList.addToHead(node);

        } else {
            let newNode = new Node({ key, value });
            this._map.set(key, newNode);

            if (this._stateCount === this.capacity) {
                let tailNode = this._linkedList.getTailNode();

                this._linkedList.remove(tailNode);
                this._map.delete(tailNode.data.key);

                this._stateCount--;
            }

            this._linkedList.addToHead(newNode);
            this._stateCount++;
        }
    }

    get(key) {
        if (this._map.has(key)) {
            let node = this._map.get(key);

            this._linkedList.remove(node);
            this._linkedList.addToHead(node);

            return node.data.value;
        } else {
            return null;
        }
    }

}