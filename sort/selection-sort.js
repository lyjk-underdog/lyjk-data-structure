function selectionSort(arr){
    let len = arr.length;

    for(let i = 0 ; i < len ; i++){
        let minInx = i;
        for(let y = i ; y < len ; y++){
            if(arr[y] < arr[minInx]){
                minInx = y;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minInx];
        arr[minInx] = temp;
    }
}
