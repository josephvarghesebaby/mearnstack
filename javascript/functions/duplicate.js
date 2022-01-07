var arr_F=[10,11,20,21]
var arr_S=[11,12,20,21]   
/*if(mark_F && mark_S){
    var uniquemark_F=(new Set(mark_F))
    var uniquemark_S=(new Set (mark_S))
}*/
/*console.log(`mark_f + mark_S`);
for(let i of mark_F){
    for(let j of mark_S){
        if(i==j){
            console.log("common element",i);
            break;
        }
        count++;
    }
}
console.log(count);*/
var p1=0;
p2=0;
 var count=0;
while(p1<=arr_F.length && p2<=arr_S.length){
if(arr_F[p1]==arr_S[p2]){
    console.log("common element",arr_F[p1]);
    p1++;
    p2++;
}
    else if(arr_F[p1]>arr_S[p2])
    {
        p2++;
    }
    else if (arr_F[p1]<arr_S[p2])
    {
        p1++;
    }
    count++;

}
console.log(count);





//sorting//
var arr=[2,13,5,8]
arr.sort((i,j)=>i-j)
console.log(arr);
