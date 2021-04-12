var lolimit=1
var uplimit=30

for(let i=lolimit;i<=uplimit;i++)
{
    var f=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        f=1
     
    }
    if(f==0)
    console.log(i);
}
