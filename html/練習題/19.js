function distance(a, b) {
    let ans = 0;
    while (b--) {
        ans += a;
        a = a / 2;
        ans += a;

    }
    ans -= a;
    return ans;
}






console.log(distance(100, 4)); // 275
console.log(distance(500, 7)); // 1484.375