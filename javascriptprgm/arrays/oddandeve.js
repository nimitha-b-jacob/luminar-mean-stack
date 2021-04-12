var arr=[20,8,3,9,30,14,7,2]
var od=[]
var eve=[]
for(let num of arr)
{
    if(num%2==0)
    eve.push(num)
    else
od.push(num)
}
console.log(eve);
console.log(od);