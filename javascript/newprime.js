var num=5;
flag="";
for(let i=2;i<num;i++)
{
    if(num%2==0){
        flag=1;
        break;
}
}
console.log(flag==1?"not a prime":"prime");
