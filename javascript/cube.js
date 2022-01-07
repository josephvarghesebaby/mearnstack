var num=150;
sum=0;
console.log("the sum cube of 123 is ");
while(num!=0)
{
    let l_digit=num%10;
    sum+=(l_digit**3);
   num=Math.floor(num/10);
}
console.log(sum);
