// its a higher order function
// function a(fn){
//     console.log(fn)
//     console.log("function A");
// }
// function b(){
//     console.log("b function");
// }
// a(b)

// function a(){
//     console.log("this is function a");
//     function b(){
//         console.log("function b ");
//     }
//     return b;
// }
// a();


// call back

// function a(fn){
//     console.log(fn)
//     fn(); /* it is compulsory it is known as callback */

// }function b(){
//         console.log("hi")
//     }

// a();



// uses of map function ===========================
//  we can do using normal function
// let arr=[1,2,3,4,5];

// function item(x){
//     return x*2;
// }
// let result = arr.map(function item(x){
//     return x*2; 
// })
// console.log(result);

// using arrow funtion 
// let arr=[1,2,3,4,5];
// let result = arr.map(num =>{
//     return num * 4;
// })
// console.log(result);

// =================================================
// using filter 

// let arr=[1,2,3,4,5,"Divesh","kumar","sachdeva",true,false,]
// let result = arr.filter(item=>{
//     return typeof item==="string";
// })
// let result1 = arr.filter(item=>{
//      return typeof item==="number" && item>2 ;
// })
// let result3 = arr.filter(item=>{
//      return typeof item==="boolean";
// })
// console.log(result);
// console.log(result1);
// console.log(result3);


// array of ibject ======================================= {mixed question}
// let obj=[
//     {firstname:"Divesh",
//      lastname:"sachdeva",
//      rollno:229028
//     },
//     {firstname:"rohan",
//      lastname:"sachdeva",
//      rollno:229028
//     },
//     {firstname:"mohan",
//      lastname:"sachdeva",
//      rollno:229028
//     },
//     {firstname:"tashu",
//      lastname:"sachdeva",
//      rollno:229028
//     }
// ]

// only divesh data will print using {filter}
// function item(item){
    //     return item.firstname === "Divesh"
    // }
    // let result = obj.filter(item)
    // console.log(result);
    

 // only firtname data will print using {map}
// function item(item){
//     return item.firstname;
// }
// let result = obj.map(item)
// console.log(result);



// reduce method==============
// only single value 
// let arr=[1,2,3,4,5,6]
// let result=arr.reduce((Acc,curr)=>{
//     Acc=Acc+curr;
//     return Acc;
// })

// console.log(result)

// find max using reduce
// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce((acc, curr) => {
//     // Use if-else to determine which value to keep as the maximum
//     if (curr > acc) {
//         return curr; // If current value is greater, update the accumulator
//     } else {
//         return acc; // Otherwise, keep the accumulator value
//     }
// });

// console.log(result); // Output: 6



// higher order function with call back
// function higherorderfunction(callfun){
//     console.log("this is higher");
//     callfun();
// }
// // we can do like this 
// function callbackfunction(){
//     console.log("this is callback");
// }
// // we can do like this also we can pass whole function
// higherorderfunction(function callbackfunction(){
//     console.log("this is callback");
// });