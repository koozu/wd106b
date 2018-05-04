function factorial(n) 
{
    let result=1;
    for(let i=1;i<=n;i++)
    {
        result*=i;
    }
    return result;
} 

console.log("10!=",factorial(10));