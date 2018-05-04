function insert(a,b)
{
    a.push(b);
    a.sort();
    return a;
}

console.log("insert([1,2,5,6,7],3) =>",insert([1,2,5,6,7],3));

