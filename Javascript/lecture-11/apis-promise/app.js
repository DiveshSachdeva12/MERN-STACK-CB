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


