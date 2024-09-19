function calc(a, b) {
    let temp = a;
    let ans = 2;
    for (let i = 1; i < b; i++) {
        ans = ans + (temp * 10 + a);
        temp = temp * 10 + a;
    }
    console.log(ans);
}


calc(2, 3); // returns 246
calc(8, 5); // returns 98760