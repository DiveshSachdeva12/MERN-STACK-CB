// class work ===============================
// let promiseone = new Promise(function(resolve,reject){
//     let data ="divesh mera bhai ha";
//     let error ="divesh mera bhai nhi ha";
//     console.log("100");
//     resolve(data)
//     reject(error)
//     console.log("10");
    
    
// })

// console.log(promiseone);

// all are independent .then .catch. .finally


























// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let a=false;
//         if(a==true){
//             resolve("this is true");
//         }
//         else{
//             reject("this is error by itself");
//         }
//     },3000)
// })
// // promiseone.then(function(pass){
// //     console.log(pass);
// // })
// promiseone.catch(function(error){
//     console.log("caught error",error);
// })
// promiseone.finally(function(){
//     console.log("The problem has been resolved finally")
// });

// =================================
// let promiseone=new Promise(function(resolve,reject){
//     console.log("pls wait i am selecting image")
//     setTimeout(()=>{
//         resolve("selected image");
//     },4000);
// })
// promiseone.then(function(imagesel){
//     console.log(imagesel);

//     return new Promise(function(resolve,reject){
//         console.log("plz wait i am applying filter on selected image");
//         setTimeout(()=>{
//             resolve("filtered image")
    
//         },5000);
    
// })
// .then(function(filter){
//     console.log(filter);
//     return new Promise(function(resolve,reject){
//         console.log("plz wait i am adding caption on  filtered image");
//         setTimeout(()=>{
//             resolve("captioned image");
//         },6000);
//     })
//     });
// })
// .then(function(caption){
//     console.log(caption);

//     return new Promise(function(resolve,reject){
//         console.log("plzz wait uploading captioned image")
//         setTimeout(()=>{
//             resolve("image upload finally");
//         },7000);
//     })
// })
// .then(function(upload){
//     console.log(upload);
// });
// ============================================
// example of uploading file
// let promiseone = new Promise(function(resolve,reject){
//     console.log("file is start downloading");
//     setTimeout(()=>{
//         resolve("file is download sucessfully");
//     },3000)
// })
// promiseone.then(function(download){
//     console.log(download);

//     return new Promise(function(resolve,reject){
//         console.log("file is start compressing");
        
//         setTimeout(()=>{
//             resolve("file is compressed successfully")
//         },4000);

// })
// }).then(function(compress){
//     console.log(compress)
//     return new Promise(function(resolve,reject){
//         console.log("file is start uploading");

//         setTimeout(()=>{
//             resolve("file is  uploaded successfully"  +"https://imageupload.zip")

//         },5000);
//     })
// }).then(function(upload){
//     console.log(upload);
// })


// =============================================================
// pure syntax of promises
// let promiseone = new Promise((resolve, reject) => {
//     let bool=true;
//     if(false){
//         resolve("the file has been loaded");
//     }
//     else{
//         reject("the file cannn not be loaded")
//     }
// }).then(function(pass){
//     console.log(pass)
// }).catch(function(error){
//     console.log(error)
// })





// function step1(){
// //     return new Promise((resolve,reject)=>{
// //         console.log("file is strat downloading...")
// //         setTimeout(()=>{
// //             resolve("file is downloaded")
// //         },2000)
// //     })
// // }
// // function step2(){
// //     return new Promise((resolve,reject)=>{
// //         console.log("file is strat compressing...")
// //         setTimeout(()=>{
// //             resolve("file is compressed")
// //         },2000)
// //     })

// // }
// // function step3(){
// //     return new Promise((resolve,reject)=>{
// //         console.log("file is strat uploading...")
// //         setTimeout(()=>{
// //             resolve("file is uploaded")
// //         },2000)
// //     })

// // }
// // step1()
// // .then((result)=>{
// //     console.log(result)
// //     return step2();
// // })
// // .then((result2)=>{
// //     console.log(result2)
// //     return step3();
// // })
// // .then((result3)=>{
// //     console.log(result3)
// // })