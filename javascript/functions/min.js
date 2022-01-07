var expenses=[10,20,1000,2000,3000,1000]
var min_exp=expenses[0]
for(let amount of expenses){
    if(amount<min_exp){
        min_exp=amount
    }
}
console.log(min_exp);
expenses.push(5000)
console.log(expenses);
let uniqueexpenses = [new Set(expenses)];   //working of set//
console.log(uniqueexpenses);


/*var st=new set();
for(let amount of expenses){
    st.add(amount);
}
console.log(amount);*/

var unique=[]
for(var amount of expenses){
   if (unique.includes(amount)){

   }
   else{
       unique+=amount;
   }
   console.log(unique);
}

