var pattern="ABCCD";
var op=[]

for (let char of pattern){
    console.log(char);

if(op.includes(char)){
    console.log(char,"recursive");
    break;
}

else {
op.push(char)
document.write(`<br>`);
}
}
