var myPow = function(x, n) {
    if (n === 0) return 1;

    let exp = Math.abs(n);
    let base = x;
    let res = 1;

    while (exp > 0) {
        if (exp % 2 === 1) res *= base;
        base *= base;
        exp = Math.floor(exp / 2);
    }

    return n < 0 ? 1 / res : res;
};
