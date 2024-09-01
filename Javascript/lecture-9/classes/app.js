// classes are syntactical sugar of constructor function
// class divesh{
//     constructor(naam,umar){
//         this.name=naam;
//         this.age=umar;
//     }
//     sayhello(){
//         console.log( `hello my name is ${this.name} and my age is ${this.age}`)
//     }
// }
// let person1= new divesh("maverick",22);
// // let person2= new divesh("naruto",23);
// // console.log(person1);
// // console.log(person1); /* it will throw in prototype */
// console.log(person1.sayhello()); /* now it will print*/


// if we want to copy the first class into another class 
// class camera{
//         constructor(naam,umar){
//             this.name=naam;
//             this.age=umar;
//         }
//         sayhello(){
//             console.log( `hello my name is ${this.name} and my age is ${this.age}`)
//         }
//     }
//     let person1= new camera("maverick",22);
//     // let person2= new divesh("naruto",23);
//     console.log(person1);




// extends keyword  
    // class camera extends divesh{
    //     constructor(naam,umar,rollno){
    //         super(naam,umar)
    //         this.roll=rollno;
    //     }
    // };
    // let person2= new camera("divi",24,420);
    // console.log(person2);

// we cannot change the sequence of super keyword 
// super keyword is responsible for running the constructor function
// camera class main jo bhi function hoga wo usko override krdega upper wale function ka wajud khatam ho jayega ........................

// synchronous javascript
// single threaded
// weakly type
// dynamically type...


// set interval is used for repetetive task
// set time out is used for performing 1 task


// this is called asychronous /* set timeout is not a part of js it is a part of browser */
// console.log("dukaan kholdo")
// setTimeout(function(){
//     console.log("shop ka maal bacho");
// },5000);
// console.log("dukaan bhadado");



// practise of classes

// class car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model
//     }
//     carexplanation(){
//         return `my car name is ${this.name} and my car model is ${this.model}`
//     }
// }
// const result= new car("ferrari",2022);
// console.log(result.carexplanation())

// // add method and propeties

// class electriccar extends car{
//     constructor(name,model,color){
//         super(name,model);
//         this.color=color;
//     }
//     decribecolor(){
//         return `my car name is ${this.name} and my car model is ${this.model} and my car color is ${this.color}
//         }`
//     }
// }
// const elect= new electriccar("toyota",2015,"red")
// console.log(elect.decribecolor());

// class fun{
//       static log(arg1) {
//         this.name="divesh"
        
//       }
// }
// console.log(fun.log())
