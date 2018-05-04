function isPrime(n)
{  
    let count=0
    for(let i=2;i<n;i++)
    {
        if(n%i==0) count++ 
    }
    if(count>0) return false;
    else return true;
}

console.log("isPrime(17)=",isPrime(17));
console.log("isPrime(27)=",isPrime(27));
