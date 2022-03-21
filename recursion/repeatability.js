//递归问题2：重复性

//上台阶问题：总共有n阶台阶，每次只能上一个或两个台阶，总共有几种方法？

function totalMethods(n){
    if(n === 1) return 1;
    if(n === 2) return 2;

    return totalMethods(n - 1) + totalMethods(n - 2);
}

//在这个问题中，就会出现重复的计算

//解决方法：添加一个“备忘录”————map


function totalMethods(n){
    let map = new Map();

    function _totalMethods(n){
        if(n === 1) return 1;
        if(n === 2) return 2;

        if(map.has(n)) return map.get(n);

        let total = _totalMethods(n - 1) + _totalMethods(n - 2);
        map.set(n,total);
        return total;
    }

    return _totalMethods(n);
}


//使用

totalMethods(5)