function palindrome(str){
    for(let i=0;i<str.length/2;i++)
    {
        if(str[i]!=str[str.length-1-i])
        {
            return false;
        }
    }
    return true;
}




console.log(palindrome("bearaeb"));
console.log(palindrome("whatever revetahw"));
console.log(palindrome("Aloha, how are you today?"));

