var arr=[2,3,4,5]
var element=7;
var low=0;
count=0;
flag="";
var upper=arr.length-1
while(low<upper)
{
    let cur_sum=arr[low]+arr[upper]
    if(element==cur_sum){
        console.log(` pairs are ( ${arr[low]}, ${arr[upper]})`);
        flag++;
        break;
    }
    else if(cur_sum>element){
        upper--;
    }
    else if(cur_sum<element){
        low++;

    }
}
if(flag==0){
    console.log("no pairs");
}




/*var arr1[10,11,20,21]
var arr2[11,12,20,21]       //  find duplicate

var arr[10,11,12,15,16]     // find 15 is there or not in the array
element=15
*/
