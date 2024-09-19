function factorPrime(num) {
    let ans = num + " = ";
    let n = num;
    let p = 2;
    while (p <= n) {
        if (n % p == 0) {
            n /= p;
            ans += p + " x ";
        } else {
            p++;
        }
    }
    console.log(ans.substring(0, ans.length - 2));
}


factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"