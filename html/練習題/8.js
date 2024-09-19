function stars(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            process.stdout.write("*");  // 不換行輸出 "*"
        }
        console.log("");  // 打印換行符，將光標移到下一行
    }
}

stars(1);
// *
stars(4);
// *
// **
// ***
// ****