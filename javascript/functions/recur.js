var pattern="ABCCBC"
/*var wc={}
for(let char of pattern){
    if (char in wc){
        console.log("first recursive character",char);
        break;
    }
    else
    {
        wc[char]=1;
    }
}*/



op=[];
var wc={} //{A:1,B:1}
pattern.split("").map(char=>char in wc? op.push(char) : wc[char]=1)
console.log(op[1]);



//Array,from
