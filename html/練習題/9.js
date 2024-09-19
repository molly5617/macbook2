function stars2(num){
    let result = '';
    for(let i = 0; i < num; i++){
        result += '*';
        console.log(result);
    }
    for(let i = num-1; i > 0; i--){
        result = result.substring(0, i);
        console.log(result);
    }
    
}

stars2(1);
// *
console.log()
stars2(2);
// *
// **
// *
console.log()
stars2(3);
// *
// **
// ***
// **
// *
console.log()
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *