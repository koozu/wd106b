function m357(a,b)
{
    let count=0;
    for(let i=a;i<=b;i++)
    {
        if(i%3==0||i%5==0||i%7==0) count++
    }    
    return count;
}

console.log("m357(2,9)=",m357(2,9));