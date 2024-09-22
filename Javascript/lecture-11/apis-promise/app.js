// let p1= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('promise 1 resolved')
//     },3000)
// })
// let p2= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('promise 2 resolved')
//     },1000)
// })
// let p3= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject('promise 3 resolved')
//     },2000)
// })

// Promise.all([p1,p2,p3])
// .then(function(data){
//     console.log(data);
    
// })
// .catch(function(err){
//     console.log(err);
    
// })
// // let returnval= Promise.all([p1,p2,p3])
// // console.log(returnval);
// // (promise all) method work with if all the promises should be resolved lekin esme aagr ek bhi reject hai to wo chalega hi ni reject wala throw krdega 

// let returnval= Promise.allSettled([p1,p2,p3])
// // (all settled) means ya to aap resolve hojao ya aap reject hojao baki main dekhlunga esko koi matlab ni ha agar rejected bhi hai to 
// console.log(returnval);


// race ka matlab ha sabse pehle jo aya uska output dikha do 
// any ka matlab ha enme se sabse pehle hone wala resolve to uska output ajayega




// practical start from here itself at home
// APIS method....
// promise.all
// promise. allsettle
// promise.race
// promise.any

// promise.all example=====================

// let promiseone= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 1 resolved"); 
//     },3000);
// })
// let promisetwo= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 2 resolved"); 
//     },4000);
// })
// let promisethree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 3 resolved"); 
//     },5000);
// })


// 1st way of doing this 
// let result=Promise.all([promiseone,promisetwo,promisethree])
// result.then((values)=>{
//     console.log(values)
// })

// second way of doing this 
// Promise.all([promiseone,promisetwo,promisethree])
// .then(function(pass){
//     console.log(pass)
// })



// promise.allsettled example=========================

// let promiseone= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 resolved"); 
//     },3000);
// })
// let promisetwo= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 2 rejected"); 
//     },4000);
// })
// let promisethree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 resolved"); 
//     },5000);
// })
// Promise.allSettled([promiseone,promisetwo,promisethree])
// .then(function(allsettle){
//     console.log(allsettle)
// })




// promise.any========================================
// aggregate error all promises were rejected any one should be resolved
// let promiseone= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 1 resolved"); 
//     },1000);
// })
// let promisetwo= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 resolved"); 
//     },1000);
// })
// let promisethree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 3 resolved"); 
//     },1000);
// })
// Promise.any([promiseone,promisetwo,promisethree])
// .then(function(any){
//     console.log(any)
// })




// promise.race====================================
// let promiseone= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 resolved"); 
//     },1000);
// })
// let promisetwo= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 2 rejected"); 
//     },4000);
// })
// let promisethree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 resolved"); 
//     },5000);
// })
// Promise.race([promiseone,promisetwo,promisethree])
// .then(function(race){
//     console.log(race)
// })


