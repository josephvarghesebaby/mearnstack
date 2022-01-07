/*class// its a prototype it contains methods and objects
object // real world entity
refernces*/

// key value
var employee={
    eid:1000,
    ename:"Riya",
    salary:100000,
    design:"Software developer"
}
console.log(employee.eid,employee.ename,employee.salary,employee.design);
employee.exp=2;
console.log(employee);
employee.place="malappuram";
console.log(employee);

console.log("gender" in employee);
employee.bloodgroup="B+";
console.log(employee);
employee.contact=8877324567;
console.log(employee);
employee.Qualification="Btec,mtec,phd";
console.log(employee);
employee.Hobbies="Eating,singing";
console.log(employee);

if( "exp" in employee){
    employee.exp+=3;
}
    else {
        employee.exp=1;
    }
console.log(employee);


