function bubbleSort(arr){
    let len = arr.length;
    
    for(let i = 0 ; i < len ; i++){ //冒泡次数，每一次冒泡都能得到一个有序的数
        let hasSwitch = false;
        for(let j = 0 ; j < len - 1 - i ; j++){ //前后数据对比
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasSwitch = true;
            }
        }
        if(!hasSwitch) break; //如果在某次冒泡中并无位置交换，说明已经有序
    }
}
