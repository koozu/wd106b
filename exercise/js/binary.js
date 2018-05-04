function binary(n)
{
    let result=0;
    let k=1;
    while(n>1)
    {
        result=result+(n%2)*k;
        k*=10;
        if(n%2==1) n--;
        n=n/2;
    }
    result+=k;
    return result;
}

console.log("binary(10)=",binary(10))