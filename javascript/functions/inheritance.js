class Parent{
    cars(){
        console.log("Landcrusier");
    }
}
class Child {
    cars(){
        super.cars
        console.log("benz A class");
    }

}
var obj=new Parent()
var ch = new Child()
obj.cars()
ch.cars()


//constructor : intialize insatnt variables,call directy when object creates
// jsonplace holder-todos

