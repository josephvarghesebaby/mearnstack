var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},
}
//console.log(users[1000])
//console.log();
function authenticate(ac_num,password){
if (validateAccountNumber(ac_num)){
let pwd=users[ac_num].password
if(pwd==password){
return 1;
}
else{
    return -1;
}
}
else
{
    return 0;
}
}
console.log(authenticate(1007,"userzone"));

function validateAccountNumber(acno){
   
    return acno in users?true:false 
}
function fundTransfer(from_acno,to_acno,amount)

if(validateAccountNumber(from_acno) && validateAccountnumber(to_acno)){
    let oldbal=[from.acno].balance;
    if(amount>oldbal)
    console.log("insufficient balance");
let balance=users[from.acno].balance;
if(amount>balance)
console.log("insuffiecent balance");
else{
    oldbal-=amount;
    users[from_acno].balance=oldbal;
    users[from_acno],balance=amount;
        users[to_acno].balance+=amount;
}

}
else {
    console.log("invalid account number");
}

let avalBal=balanceEnquiry(1000);
console.log(authenticate (1007,"userone"));












