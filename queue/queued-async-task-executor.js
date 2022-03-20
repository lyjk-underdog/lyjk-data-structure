
class QueuedAsyncTaskExecutor {

    arr = [];
    head = 0;
    tail = 0;
    running = false;

    constructor({ capacity, fulled }) {
        this.capacity = capacity + 1;
        this.fulled = fulled;
    }

    enqueue(promise) {
        if ((this.tail + 1) % this.capacity === this.head) {
            this.fulled();
            return;
        }

        this.arr[this.tail] = promise;
        this.tail = (this.tail + 1) % this.capacity;

        if (!this.running) {
            this.running = true;
            this._process();
        }
    }

    _dequeue() {
        if (this.head === this.tail) return null;

        let temp = this.arr[this.head];
        this.head = (this.head + 1) % this.capacity;

        return temp;
    }

    async _process() {
        
        let promise = this._dequeue();

        if (promise) {
            await promise;
            this._process();
        } else {
            this.running = false;
        }
    }
}






