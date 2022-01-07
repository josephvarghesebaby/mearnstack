
console.log("pyramid");
var str="";
var n=5;
    for (let i = 1; i <=n; i++) {
    let str="";   
    for(let s = 1; s<=(n-i); s++) {
        str+=" ";
    }

        for (var j = 1; j <=i; j++) {
            str +=" * ";
        }
        console.log(str);
    }
    

    // var pattern=ABACC
    //var op[] // A,B 
