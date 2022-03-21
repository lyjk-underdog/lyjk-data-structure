function quickSort(arr) {

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
                smallPtr++
            }
        }

        _swap(smallPtr, pivot);
        pivot = smallPtr;

        return pivot;
    }

    function _sort(l, r) {
        if (l >= r) return;

        let pivot = _partition(l, r);

        _sort(l, pivot - 1);
        _sort(pivot + 1, r);
    }

    _sort(0, arr.length - 1);
}