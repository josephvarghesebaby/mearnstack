var score=[10,20,30,4,3,2]
    mark=5;
    var dup=[]
    for (i of score){
        i>mark? dup.push(i+1):dup.push(i-1) //push is used to add the number in the array 
    }
console.log(dup);
