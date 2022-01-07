var num1=10,num2=20,num3=30;

if((num1>num2)&&(num1>num3)){
    console.log(`the number is greater${num1}`);
    // num1
    // num2 or num3
    if(num2>num3)
    {
        console.log(`second largest no${num2}`);
            console.log(sort`${num1},${num2},${num3}`);
    }// num1,num2,num3
    else{
        console.log(`second largest no${num3}`);
            console.log(`sort ${num1} ${num3}${num2}`);
    }//num1,num3,num2
}
else if((num2>num1)&&(num2>num3)){//num1 num3
        console.log(`the number is greater${num2}`);
    if(num1>num3)
    {
        console.log(`second largest ${num2}`);
          console.log(`sort ${num2}${num3}${num1}`);
    }
    else{
        console.log(`second largest ${num3}`);
          console.log(`sort ${num2}${num3}${num1}`);
    }

}
else if((num3>num1)&&(num3>num2)){ //num2 num1
    console.log(`the number is greater${num3}`);
}
if(num1>num2){
console.log(`second lagest no ${num3}`);
console.log(`sort ${num3},${num1},${num2}`);
}
else {
    console.log(`second lagest no${num2}`);
    console.log(`sort ${num3},${num2},${num1}`);
}
