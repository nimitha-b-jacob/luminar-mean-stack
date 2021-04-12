var num=123
var no
sum=0;

while(num!=0)

{
    no=num%10
    sum=sum+(no**3)
    
    num=Math.floor(num/10)

}
console.log(sum);