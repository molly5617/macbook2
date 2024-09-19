function PPDI() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++) {
                if (i * i * i + j * j * j + k * k * k == i * 100 + j * 10 + k) {
                    console.log(i * 100 + j * 10 + k);
                }
            }
        }
    }
}





PPDI();