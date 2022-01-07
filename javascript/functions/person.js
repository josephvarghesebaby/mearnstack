class Person{
        constructor(...args){
            this.name=name[0];
            this.age=age[1];
            this.gender=gender[2];

        }
        printPerson(){
            console.log(this.name, this.age, this.gender);
        }


    }
var obj1=new Person()
obj1.setPerson=("ram","20","male");
obj1.printPerson()

var obj2=new Person()
obj2.setPerson("ravi","23","male");
obj2.printPerson()
    
var obj3=new Person()
obj3.setPerson("balu","32","male");
obj3.printPerson()
 

    
