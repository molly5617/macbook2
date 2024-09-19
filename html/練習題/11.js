function reverse(str)
{
    let result="";
    for (let i=str.length-1; i>=0;i--)
    {
        result+=str[i];
    }
    console.log(result);
}
reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"