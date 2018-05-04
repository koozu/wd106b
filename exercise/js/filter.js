function filter(a,b)
{
    let j=[];
    for(let i=a;i<=b;i++)
    {
        if(i%3!=0&&i%5!=0&&i%7!=0) j.push(i);
    }
    return j;
}

console.log("filter(2,9)=",filter(2,9))