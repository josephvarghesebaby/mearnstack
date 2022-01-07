var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
]
//costly mobile
/*/mobiles.sort((m1,m2)=>m2[3]-m1[3])
console.log(mobiles[0][1]);*/

//snapdragon processor
/*for(let i of mobiles){
if(i[4]=="snapdragon"){
    console.log(i[1]);
}
}*/
/*var newarray=[]
for(let mobile of mobiles){
    if(mobile[4]=="snapdragon" && mobile[6]=="5G"){
        newarray.push(mobile)
    }
}
newarray.sort((m1,m2)=>m2[1]-m1[1]);
console.log(newarray);*/


// any mobile under 10 k
// samsung 51 mobile detail

/*for (let mob of mobiles){
    if(mob[3]==10000){
console.log(mob);
    }
    else {
             console.log("there is no phone under 10k");
        }
    }*/

    /*for (let mob of mobiles){
        if(mob[2]=="samsung A51"){
    
    console.log(mob);
        }
    }*/

   /* var mob=mobiles.map(mob=>mob[2]);
    console.log(mob);

var mob_price=mobiles.filter(mob_price=>mob_price[3])
console.log(mob_price);*/

/*var sam=mobiles.filter(mob=>mob[3]<=25000).map(mob=>mob[1])
console.log(sam);*/


 /*var arr=[]
var range=mobiles.filter(mobiles=>mobiles[3]>=25000 && mobiles[3]<=30000)
arr.push()
console.log(range);*/



// list all 5g mobiles names
/*var fiveg=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[2]);
console.log(fiveg);


// 5g mobile under 25k
var range=mobiles.filter(mob=>mob[3]<=25000);
console.log(range);*/


/*var mob_filter=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=="4G" && mob[5]=="AMOLED");
console.log(mob_filter);*/


/*var hprice=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2);
console.log(hprice);*/


/*var lprice=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
console.log(lprice);*/

// mobile below 10k
/*var isAvailable=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000);
console.log(isAvailable);*/


var nameById=mobiles.find(mob=>mob[0]==1000)[1]
console.log(nameById);
