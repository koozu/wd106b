function phalanx(n)
{
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n;j++)
        {
            console.log("%d * %d = %d",i,j,i*j);
        }
    }
}

console.log(phalanx(9));