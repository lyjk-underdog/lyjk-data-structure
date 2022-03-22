function binarySearch(arr , val){

    function _find(l , r){
        if(l > r) return -1;

        let mid = Math.floor((l + r) / 2);

        if(arr[mid] > val){
            return _find(l , mid - 1);
        }else if(arr[mid] < val){
            return _find(mid + 1 , r);
        }else {
            return mid;
        }
    }

    return _find(0 , arr.length - 1);
}
