//利用快速排序的分区思想实现O(n)时间复杂度下查找数组第K大元素

function findKLargest(arr, k) {

    function _swap(index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    function _partition(l, r) {
        let pivot = Math.floor(Math.random() * (r + 1 - l) + l),
            smallPtr = l;

        for (let cur = l; cur <= r; cur++) {
            if (arr[cur] < arr[pivot]) {
                _swap(smallPtr, cur);
                if (smallPtr === pivot) pivot = cur;
                smallPtr++;
            }
        }

        _swap(smallPtr, pivot);
        pivot = smallPtr;

        return pivot;
    }

    function _find(l, r) {
        let pivot = _partition(l, r);

        if (pivot + 1 === k) return arr[pivot];
        else if (pivot + 1 < k) {
            return _find(pivot + 1, r);
        } else {
            return _find(l, pivot - 1);
        }

    }

    return _find(0, arr.length - 1);
}