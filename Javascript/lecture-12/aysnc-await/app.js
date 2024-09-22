// // async await
// // agar aysnc ke ander koi promise return hora ha to vo exist krega bhar wala nhi karega 


// // github code here ====================================

// // function sam(){

// // }
// // console.log(sam());

// // ----------------------

// // function Sam(){

// // }
// // console.log(new Sam());

// // ------------------

// // async function sam(){

// //     return 10;
// // }
// // console.log(sam());

// // -----------------------

// async function sam(){

//     return new Promise(function(resolve , reject){
//         resolve("sharaab")
//     })
// }
// console.log(sam());

// // -----------------------


// // async function sam(){
// //     // return "samarth"
// //     return new Promise(function(resolve , reject){
// //         resolve("lolipop")
// //     })
// // }
// // console.log(sam())



// // --------------------------------


// // async function getFetch(){
// //     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls")
// //     return data;
// // }
// // console.log(getFetch())

// // ----------


// console.log("kala kutta");

// async function getFetch(){
//     console.log("ghoomi ghoomi")
//     let data =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let resp =  await data.json()
//     console.log(data)
//     console.log("ghoomi ghoomi 2");
//     console.log(resp)
// }
// getFetch()

// console.log("laal pari");

// // ----------------------------


// async function sam(){
//     console.log("hello 1");
//     let out1 =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     console.log(out1);
//     console.log("hello 2");
// }
// sam();

// function lol(){
//     console.log("1000")
//     console.log("2000")
// }
// lol();





// // setTimeout(() => {
// //     console.log('Timeout')
// // }, 0)
// // Promise.resolve().then(() => console.log('Promise'))
// // console.log('End')
  

// // async function foo() {
// //     return 'Hello World'
// // }

// // const result = foo()
// // console.log(result)


// // microtask queue promises jate ha kuki higher priority hai to event loop sabse pehle microtask queue ko execute krega



// async await practise itself at home ======================================

// function fun(){

// }
// console.log(fun())


// function fun(){
//     return 10
// }
// console.log(fun())

// async function fun(){
//     return promise
// }
// console.log(fun())


// let promiseone= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 1 resolved"); 
//         },3000);
//     })

    // when we dont have async await we do like this 
// function fun(){
//     promiseone.then((pass)=>console.log(pass))
// }
// fun()

// it destory the .then chaining 
// console.log("hello my name is rohan")
// async function fun() {
//     console.log("hello my name is mohan")
//     let output=await promiseone; 
//     console.log("hello my name is sonu")
//     console.log(output);
// }
// fun()
// console.log("hello my name is monu")




// async function  fun() {
//     try{
//         console.log("file is start downloading..")
//         let promiseone = await new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("file is downloaded successfully");
//             }, 3000);
//         })
//         console.log(promiseone)

//         console.log("file is compressing ..")
//         let promisetwo = await new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("file is compressed successfully");
//             }, 4000);
//         })
//         console.log(promisetwo)


//         console.log("file is uploading ..")
//         let promisethree = await new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve("file is uploaded successfully");
//             }, 3000);
//         })
//         console.log(promisethree)

//     }
//     catch(error){
//         console.log("here the error",error)
//     }
// }
// fun()

