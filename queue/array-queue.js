class ArrayQueue {

    arr = [];
    head = 0;
    tail = 0;

    constructor(capacity){
        this.capacity = capacity;
    }

    enqueue(val){
        if(this.tail === this.capacity){
            if(this.head === 0) return false;

            for(let i = head ; i < this.capacity ; i++){
                this.arr[i - head] = this.arr[i];
            }

            this.tail -= this.head;
            this.head = 0;
        }

        this.arr[this.tail] = val;
        this.tail++;
        return true;
    }

    dequeue(){
        if(this.head === this.tail) return null;

        let temp = this.arr[this.head];
        this.head++;
        return temp;
    }
}
