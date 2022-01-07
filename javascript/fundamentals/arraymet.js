/*map()The map() method in JavaScript creates an array by calling a specific function on each element present
 in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and
  calling function on every element of array

filter()The filter() method creates a new array filled with elements that pass a test provided by a function

reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function
 for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator

 sort ()
some()
find()
forEach()*/

/*var arr=[2,3,4,5,6,7,8]
var square=arr.map(num=>num**2);
console.log(square);

var add=arr.map(num=>num+2)
console.log(add);*/

var names=["aju","aji","abu"]
var upp=names.map(names=>touppercase);
console.log(upp);


