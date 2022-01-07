var benz={
    name:"benz",
    colors:["black","blue","white"],
    varients:["petrol"],
    price:"50 lakhs",
    manufacturer:"mercedez",
getPrice(){
    return this.price
}
    
}
var coppers={
    price:"30 lakhs",
    manufacturer:"mini copper"

}
console.log(benz.getPrice());
coppers.__proto__=benz
console.log(coppers.getPrice());