function insertionSort(arr){
    let len = arr.length;

    for(let i = 0 ; i < len ; i++){
        let temp = arr[i],
            j = i - 1;
        for(;j >= 0 ; j--){
            if(arr[j] > temp){
                arr[j + 1] = arr[j];
            }else break;
        }
        arr[j + 1] = temp;
    }
}
