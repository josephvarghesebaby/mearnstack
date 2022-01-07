class Bank {
  accounts = {
    1000: {
      accno: 1000,
      personName: "ram",
      balance: 5000,
      password: "userone",
      transactions: {
        creditTransactions: [],
        debitTransactions: [],
      },
    },
    1001: {
      accno: 1001,
      personName: "ravi",
      balance: 7000,
      password: "usertwo",
      transactions: {
        creditTransactions: [],
        debitTransactions: [],
      },
    },
    1002: {
      accno: 1002,
      personName: "raju",
      balance: 8000,
      password: "userthree",
      transactions: {
        creditTransactions: [],
        debitTransactions: [],
      },
    },
    1003: {
      accno: 1003,
      personName: "vivek",
      balance: 15000,
      password: "userfour",
      transactions: {
        creditTransactions: [],
        debitTransactions: [],
      },
    },
  };
  session={}
  validateAccountNumber(acno) {
    return acno in this.accounts ? true : false;
  }

  authenticate(acno, password) {
    if (this.validateAccountNumber(acno)) {
      let pwd = this.accounts[acno].password;
      if (pwd == password) {
        console.log("successfull login");
        this.session["user"]=acno
      } else {
        console.log("invalid password");
      }
    }
    else{
        console.log("invalid acno");
    }
 

}
 
getbalance(acno)
{
    return this.accounts[acno].balance
}
balanceEnquiry()
{
if("user" in this.session){
let loggedUser=this.session["user"];
console.log(this.getbalance(loggedUser));

}
loginRequired(acno)
{
return "user" in this.session ? true:false
}
loggedUser(acno)
{
  if(this.loginRequired()){
    return this.session["user"]
  }
}
fundTransfer()
{
    if(this.loginRequired()){
        let loggedUser=this.session["user"]
        if(this.validateAccountNumber(to_acno)){
            let curBal=this.getbalance(loggedUser)
            if(amount>curBal){
                console.log("insufficient balance");
            }
        
                else
                {
                    console.log("transaction completed");
                }
          
          }
        else{
            console.log("invalid to account number");
        }
        
    }
  
        else {
            console.log("invalid session u must login");
        }

    }
getDebitTransactions()
{
let user=this.loggedUser()
this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t));
}
   getCreditTransactions()
   {
    let user=this.loggedUser()
    this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t));
   } 
}
}
var bank = new Bank()
bank.authenticate(1000,"userone");
bank.balanceEnquiry();
bank.fundTransfer();
bank.debitTransactions();
bank.creditTransactions();
bank.loginRequired();
bank.loggedUser();
//debit 
// credit
//calculator

