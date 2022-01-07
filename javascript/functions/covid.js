var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

/*var hrate=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(hrate);*/

// q2 district with higest 1 dose vaccination rate
/*var fst_vaccine=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
console.log(fst_vaccine);*/
// q3 district with lowest death cases

/*var low_death=covid_data.reduce((d1,d2)=>d1[4]<d1[4]?d1:d2)
console.log(low_death);*/

// q4 sort district with +ve cases

//var s_district=covid_data.sort((d1,d2)=>d1[2]-d2[2]);
//console.log(s_district);

// q5 sort the districts based on 1st dose

//covid_data.sort((d1,d2)=>d1[5]-d2[5])
//console.log(covid_data);



// q6 is there any states with +ve cases > 60000
//var greaterPcase =covid_data.filter(data=>data[2]>=60000);
//console.log(greaterPcase);

// q7 print trissur details

//var thrissur=covid_data.filter(data=>data[1]=="thrissur")
//console.log(thrissur);
// q8 total number of +ve cases

// q9 total number of cured cases

// q10 cured numbers of iduky
var idukki=covid_data.find(d1=>d1[1]=="idukki")[4]
console.log(idukki);

// q11 total number of death cases


//var sum=covid_data.map(d=>d[3]).reduce((d1,d2)=>d1 + d2);
//console.log(sum); ///////////////////////


