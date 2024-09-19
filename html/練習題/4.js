function isAllUpperCase(str){
    if(str.length ==0)
    {
        return false;
    }
    for(let i=0; i<str.length; i++)
    {
        if(str[i]!=str[i].toUpperCase())
        {
            return false;
        }
        return true;
    }
}
console.log(isAllUpperCase("ABCD"));
console.log(isAllUpperCase(""));
console.log(isAllUpperCase("aBCD"));