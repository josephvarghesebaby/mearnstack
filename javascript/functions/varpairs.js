var arr=[2,3,4,5,3]
var sum=15,count=0,flag=0;
for(let i of arr){
    for(let j of arr){
        if((i+j)==sum)
        {
            console.log(` pairs (${i}+${j})`);
            flag=1;
        }
    
    }
}
if(flag=0){
        console.log(`no pairs found`);
    }
 