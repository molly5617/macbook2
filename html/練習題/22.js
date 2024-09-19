function shuffle(arr) {
    let currentIndex = arr.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    console.log(arr);
    return arr;
}




shuffle([2, 11, 37, 42]);
// returns 一個經過洗牌後的 array。
// 可能是[42, 11, 37, 2]