var num=5
var f=0
for(let i=2;i<num;i++)
{
if(num%i==0){
 f=1
 break
}
}
if(f==0){
console.log(num+" prime");
}
else{
console.log(num+" not prime");
}