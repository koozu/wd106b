function mean(a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum+=a[i];
    }
    return sum/a.length;
}

console.log("mean([1,4,5,8,6])=",mean([1,4,5,8,6]));