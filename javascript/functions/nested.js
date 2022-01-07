
var employees=[
[10,"aju",150000,"python",100,"btec",2000,2030],
[11,"ajikuttan",200000,"testing",105,"btec",1950,2005],
[12,"shahed",30000,"testing",500,"btec",1980,2020],
[13,"christo",10000,"mearnstack",1500,"mtec",1990,2010],
[14,"sumesh",5000,"networking",4000,"mtec",2005,2010],
]
/*for (let i of students){
if(i[2] == "testing" && i[3] > 140)
{

    console.log(i);
}
}
*/
/*var max_total=0;
for (let i of students){
    if(i[3] > max_total){
      max_total+=i[3]
    }
    
}
console.log(max_total);
*/

/*employees.sort((e1,e2) => e2[2]-e1[2]);
console.log(employees[1][2]);
console.log(employees[employees.length-1][2]);


var testing_details=[]
for(let emp of employees){
  if (emp[3]=="testing"){
    testing_details.push(employees)
  }
}
testing_details.sort((d1,d2)=>d2[2]-d1[2])
console.log(testing_details[0][2]);*/


/*for(let emp of employees){
  if(emp[1][0]=="A" || emp[1][0]=="a"){
    console.log(emp);
}
}*/


// employee wrk 2009-2015
/*for (emp of employees){
  if(emp[6]>=1980 && emp[7]<=2010){
    console.log(emp);
  }
}*/

//experinence
var dur=[]
for (let exp of employees){
if(exp[7]-exp[6]>10){
console.log(exp);
}
}

