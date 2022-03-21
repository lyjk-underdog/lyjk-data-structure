//递归的问题1：栈溢出

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

//解决方案1：尾递归优化

//首先把改写成尾递归函数

function factorial(n, res = 1) {
    if (n === 0) return res;
    return factorial(n - 1, n * res);
}

//因为有的编程语言不会进行尾递归优化，所以我们需要自己实现一个

function tac(f) {
    let value,
        arr = [],
        actived = false;

    return function () {
        arr.push(arguments);
        if (actived === false) {
            actived = true;
            while (arr.length !== 0) {
                value = f.apply(this, arr.shift());
            }
            actived = false;
            return value;
        }
    }
}

//使用

let factorial = tac(function (n, res = 1) {
    if (n === 0) return res;
    return factorial(n - 1, n * res);
})


factorial(10000);

//注意：并不是所有的递归函数都可以改写成尾递归函数




