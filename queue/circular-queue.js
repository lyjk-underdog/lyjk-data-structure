class CircularQuene {

    arr = [];
    head = 0;
    tail = 0;

    constructor(capacity) {
        this.capacity = capacity + 1;//为了区分队列空和队列满的判定条件，循环队列中的tail指针指向的位置是不存储数据的
    }

    enqueue(val) {
        if ((this.tail + 1) % this.capacity === this.head) return false;

        this.arr[this.tail] = val;
        this.tail = (this.tail + 1) % this.capacity;

        return true;
    }

    dequeue() {
        if(this.head === this.tail) return null;

        let temp = this.arr[this.head];
        this.head = (this.head + 1) % this.capacity;
        
        return temp;
    }
}