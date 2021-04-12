var num=542
var no
rev=""

while(num!=0)

{
    no=num%10

    rev=rev+no
   
    num=Math.floor(num/10)

}
console.log(rev);