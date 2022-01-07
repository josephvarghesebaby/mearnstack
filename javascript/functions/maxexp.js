var expenses=[1000,2000,3000]
var max_exp=0;
for(let amount of expenses){
    if(amount>max_exp){
        max_exp=amount
    }
}
console.log(max_exp);