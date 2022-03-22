//二分查找的变体，针对有序、有重复的数组

//变体1：查找第一个值等于给定值的元素

function binarySearch1(arr, val) {

    function _find(l, r) {
        if (l > r) return -1;

        let mid = Math.floor((l + r) / 2);

        if (arr[mid] > val) {
            return _find(l, mid - 1);
        } else if (arr[mid] < val) {
            return _find(mid + 1, r);
        } else {
            if (mid !== 0 && arr[mid - 1] === val) return _find(l, mid - 1);
            return mid;
        }
    }

    return _find(0, arr.length - 1);
}


//变体2：查找最后一个值给定的元素

function binarySearch2(arr, val) {

    function _find(l, r) {
        if (l > r) return -1;

        let mid = Math.floor((l + r) / 2);

        if (arr[mid] > val) {
            return _find(l, mid - 1);
        } else if (arr[mid] < val) {
            return _find(mid + 1, r);
        } else {
            if (mid !== arr.length - 1 && arr[mid + 1] === val) return _find(mid + 1, r);
            return mid;
        }
    }

    return _find(0, arr.length - 1);
}

//变体3：查找第一个值大于或等于给定值的元素

function binarySearch3(arr, val) {

    function _find(l, r) {
        if (l > r) return -1;

        let mid = Math.floor((l + r) / 2);

        if (arr[mid] < val) {
            return _find(mid + 1, r);
        } else {
            if (mid !== 0 && arr[mid - 1] >= val) return _find(l, mid - 1);
            return mid;
        }
    }

    return _find(0, arr.length - 1);

}

//变体4：查找最后一个值小于或等于给定的值

function binarySearch4(arr, val) {

    function _find(l, r) {
        if (l > r) return -1;

        let mid = Math.floor((l + r) / 2);

        if (arr[mid] > val) {
            return _find(l, mid - 1);
        } else {
            if (mid !== arr.length - 1 && arr[mid + 1] <= val) return _find(mid + 1, r);
            return mid;
        }
    }

    return _find(0, arr.length - 1);
}





