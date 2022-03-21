function mergeSort(arr) {

    function _merge(l, mid, r) {
        let temp = [],
            tempInx = 0,
            cur1 = l,
            cur2 = mid + 1;

        while (cur1 !== mid + 1 && cur2 !== r + 1) {
            if (arr[cur1] <= arr[cur2]) {
                temp[tempInx++] = arr[cur1++];
            } else {
                temp[tempInx++] = arr[cur2++];
            }
        }

        if (cur1 === mid + 1) {
            while (cur2 !== r + 1) {
                temp[tempInx++] = arr[cur2++];
            }
        } else {
            while (cur1 !== mid + 1) {
                temp[tempInx++] = arr[cur1++];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            arr[l + i] = temp[i];
        }

    }

    function _sort(l, r) {
        if (l >= r) return;

        let mid = Math.floor((l + r) / 2);

        _sort(l, mid);
        _sort(mid + 1, r);

        _merge(l, mid, r);
    }

    _sort(0, arr.length - 1);
}