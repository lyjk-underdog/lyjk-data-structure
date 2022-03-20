class ArrayStack {
    
    arr = [];
    top = 0;

    constructor(capacity){
        this.capacity = capacity;
    }

    push(val){
        if(this.top === this.capacity) return false;
        this.arr[this.top] = val;
        this.top++;
        return true;
    }

    pop(){
        if(this.top === 0) return null;
        this.top--;
        return this.arr[this.top];
    }
}