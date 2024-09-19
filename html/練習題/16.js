function inversePyramid(num) {
    let result = '';

    // 構造第一行的滿星號
    for (let i = 0; i < num * 2 - 1; i++) {
        result += '*';
    }
    console.log(result);

    // 從第二行開始，每行兩側逐漸替換為空格
    for (let j = 1; j < num; j++) {
        // 將第 j 行的第 j 個和倒數第 j 個字符替換為空格
        result = ' '.repeat(j) + '*'.repeat(num * 2 - 1 - 2 * j);
        console.log(result);
    }
}

inversePyramid(4);
// *******
//  *****
//   ***
//    *