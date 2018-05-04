function countPrime(a,b)
{
    let count=0;
    let n=0;
    for(let i=a;i<=b;i++)
    {
        count=0;
        for(let j=2;j<i;j++)
        {
            if(i%j==0) count++;
        }
        if(count==0) n++;
    }
    return n;
}

console.log("countPrime(7,13)=",countPrime(7,13));