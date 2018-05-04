function score(x)
{
    if(x>=90) return "A";
    else if(x>=80) return "B";
    else if(x>=70) return "C";
    else return "D";
}

console.log("degree(80)=",score(80));