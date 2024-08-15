// function a(){
//     this.name="Divesh",
//     this.age=20;
// }
// let out =a(); /* generic */
// let out2 = new a(); /* constructor */
// console.log(out) /* undefined */
// console.log(out2) /* print value of object */


// capital letter se jo function banate ha vo contructor function
// lower letter se jo function banate ha vo general function

// function Divesh(naaam,kaaam){
//     console.log("i am divesh raju");
//     this.naam=naaam;
//     this.kaam=kaaam;
// }
// let obj1= new Divesh("Divesh","business man")
// let obj2= new Divesh("tanisha","business man")
// console.log(obj1);
// console.log(obj2);

// function  Sayhello(){
//     this.name="tashu",
//     this.age=29;
// }

// // create an object
// let callingafunction= new Sayhello();
// console.log(callingafunction)

// // access attribute
// console.log(callingafunction.name);
// console.log(callingafunction.age);

// function Sayname2(naaam,aage){
//     this.name=naaam
//     this.age=aage
// }
// Sayname2.prototype.arr=[1,2,3,4]
// let result = new Sayname2("divesh","90")
// console.log(result);




// function Sayname(name,age){
//     this.name=name,
//     this.age=age;

// }
// Sayname.prototype.sayhello = function(){
//     console.log(`this is my name: ${this.name} and this is my age : ${this.age}`);
    
// }
// let obj1= new sayname("divesh","50");
// console.log(obj1);
// let fun=new sayname("Divesh","50");
// fun.sayhello();


