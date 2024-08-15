// let a=[1,2,3,4]
// for(let item of a){
//     console.log(item)
// }

// for in
// let obj={
//     name:"Divesh",
//     Section:"A",
//     rollno:"229028",
//     // item:"lol"
// }

// for(let i in obj){
//     // console.log(i,":",obj[i])
//     // console.log(obj["item"];


// }


// object with function 
// let obj={
//     naam:"Divesh",
//     rollno:229028,
//     greet:function sum(num1,num2){
//         let sum=num1+num2;
//         return sum;

//         // let num1=10;
//         // let num2=20;
//         // let sum= num1+num2;
//         // return sum;
//     }
// }
// method: jo function object ke ander ha this is called method 
// console.log(obj.greet(10,12))

// nature of a function is to  return something and is a reuseable thing
// by default if we not given return something then the function return undefined

// function kuchbhi(){
//     console.log("this is a function 1 ");
//     return 1;
// }
// function bhaubhau(){
//     console.log("this is a function 2 ");
//     return "tommy";
// }
// let returnedval=kuchbhi();
// let returnedva2=bhaubhau();
// console.log(returnedval);
// console.log(returnedva2);


// argument function ke calling pe dete ha or declaration pe parameter

// parametrized function
// function sum(a=100,b=420){
//     // let sum= num+num1;
//     // return sum;
//     return num+num1;
//     // nan not a number;
// }
// console.log(sum(10,15));


// let a=1;
// let b=true;
// let c="1";
// let d=null;
// let e=undefined;
// let f=-Infinity;
// let g=+Infinity;
// let h =NaN;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d)) /* object */
// console.log(typeof(e))
// console.log(typeof(f))
// console.log(typeof(g))
// console.log(typeof(h)) /* return number of type of Nan */


// function add(a=100,b=420){
//     return a+b;
// }
// let out=add(6);
// console.log(out);


// what are first class function 
// why this is called first class function
// ans: the nature of the function is to  allowed to be a function and pointing to a varible this is called first class function and when it is store in a variable is called fist class function

// example
// let karsaketo=function sum(){
//     console.log("This is a first class function");
// }
// karsaketo();
// console.log(karsaketo);

// console.log()
// console.dir()
// console.error()