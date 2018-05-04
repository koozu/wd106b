function gcd(a,b)
{
    let r=0;
    while(a%b!=0)
    {
        r=b;
        b=a%b;
        a=r;    
    }
    return b;
}

console.log("gcd(27,21)=",gcd(27,21));