// finding single value fro the array

var arr=[2,3,4,5,6,7,8]
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(max,min,sum);
