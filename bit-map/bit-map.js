class BitMap {
    constructor(capacity){
        this.capacity = capacity;
        let buffer = new ArrayBuffer(Math.ceil(capacity / 8));
        this._byteArr = new Uint8Array(buffer);
    }

    _byteInx(val){
        return Math.floor(val / 8);
    }

    _bitInx(val){
        return val % 8;
    }

    set(val){
        if(val > this.capacity) throw new Error('已超过最大容量');
        let byteInx = this._byteInx(val),
            bitInx = this._bitInx(val);
        
        this._byteArr[byteInx] |= (1 << bitInx);

        return true;
    }

    has(val){
        let byteInx = this._byteInx(val),
            bitInx = this._bitInx(val);
        
        return this._byteArr[byteInx] & (1 << bitInx) ? true : false;
    }

}

//bitMap只用一个bit来存储一个数据的有无，比hashMap节省空间。
//bitMap中看数据是否存在只需要看对应bit的值是1或是0，hashMap则需要一个一个对比整个数据，执行效率比bitMap低

//但是bitMap有一个缺点，那就是数据范围不能太大，如果数据范围太大，内存存储量不降反增。
//解决方案：在bitMap的基础上改进————布隆过滤器

//布隆过滤器会把没有的数据误判成有，但是绝不会把有判成没有，也就是说，布隆过滤器说这个数据没有，那肯定就是没有。