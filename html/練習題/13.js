function isPrime(num)
{
    if(num==1)
        console.log("false");
    else if(num==2)
        console.log("true");
    else 
    {
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
                console.log("false");
                return ;
                
            }
                
                
        }
        console.log("true");
    }
}






isPrime(1); // returns false
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false