var arr=[2,5,3,4,1,3]
var num=6
for(let i=0;i<arr.length-1;i++)
{
for(let j=i+1;j<arr.length;j++)
{
    if(i!=j)
    {
        if(arr[i]+arr[j]==num)
        console.log(arr[i]+"and"+arr[j] );
    }
}
}