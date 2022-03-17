class Node {
    constructor(data = '', next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head = null;

    find(val) {
        let cur = this.head;

        while (cur !== null) {
            if (cur.data === val) break;
            cur = cur.next;
        }

        if (cur === null) return false;

        return true;
    }

    insert(val, ref, direction = 'back') {

        let _insert = (val, ref, direction) => {
            let guard = new Node(-1, this.head),
                cur = this.head,
                pre = guard;

            while (cur !== null) {
                if (cur.data === ref) break;
                pre = cur;
                cur = cur.next;
            }

            if (cur === null) throw new Error('参考节点不存在');

            let insertedNode = new Node(val);

            switch (direction) {
                case 'front':
                    insertedNode.next = pre.next;
                    pre.next = insertedNode;
                    break;
                case 'back':
                    insertedNode.next = cur.next;
                    cur.next = insertedNode;
                    break;
                default:
                    throw new Error('无效direction');
            }

            this.head = guard.next;
        }

        let _insertToHead = (val) => {
            let insertedNode = new Node(val);

            insertedNode.next = this.head;
            this.head = insertedNode;
        }

        if (!ref) _insertToHead(val);
        else _insert(val, ref, direction);
    }

    remove(val) {
        let guard = new Node(-1, this.head),
            cur = this.head,
            pre = guard;

        while (cur !== null) {
            if (cur.data === val) break;
            pre = cur;
            cur = cur.next;
        }

        if (cur === null) throw new Error('待删除节点不存在');

        pre.next = cur.next;
        cur.next = null;

        this.head = guard.next;
    }

}