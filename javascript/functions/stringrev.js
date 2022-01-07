function reverseString(str){
    newString=""; //3,2,1,0
    
    for ( let i=str.length-1;  i>=0; i-- ){
    newString+=str[i];
}
return newString;
}
var String="riya";
const reverse=reverseString(String);
console.log(reverse);
