function find(a,b)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===b) return i;
    }
    return -1
}

console.log("find([1,4,5,8,9],5) =>",find([1,4,5,8,9],5));