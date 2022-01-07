var arr=[2,5,6,8,9,10,12]

var element=20;
var low=0;
 var flag=0;
var upp=arr.length-1;

while(low<upp){
    let mid=Math.floor((low+upp)/2)
    if(element==arr[mid]){
        flag=1;
        break;
    }

    else if(element>arr[mid]){
       low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
}
    if(flag==0){
        console.log("not found");

}
    else {
        console.log("found");
}

