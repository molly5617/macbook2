function isUpperCase(str){
    if(str.length==0)
    {
        return false;
    }
    if(str[0]==str[0].toUpperCase())
    {
        return true;
    }
    else{
        return false;
    }

}
console.log(isUpperCase("ABCD"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));
