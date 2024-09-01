// console.log("start");

// let id = setInterval(function(){
//     console.log("tun tun mausi");
// },0);
// clearInterval(id);

// console.log("end");


// ================================================ ques 2
// console.log("start");

// let id = setInterval(function(){
//     console.log("tun tun mausi");
// },0);
// // clearInterval(id);

// console.log("end");


// ========================================================
// console.log("start");
// setTimeout(()=>{
//     console.log("tun tun mausi");

// },1000)
// setTimeout(()=>{
//     console.log("chutki sang bheem");

// },2000);
// setTimeout(()=>{
//     console.log("indumati sang bheem");

// },2000);
// console.log("end");


// function step1(fn){
//     console.log("please wait i am selecting an image");
//     setTimeout(()=>{
//         fn("selected image")
//     },2000)
// }
// function step2(image,fn){
//     console.log(`please wait i am apply filter on ${image}`)
//     setTimeout(()=>{
//         fn("filtered image");
//     },4000)
// }
// function step3(filter,fn){
//     console.log(`please wait adding caption on ${filter}`);
//     setTimeout(()=>{
//         fn("captioned image")
//     },5000)

// }
// function step4(fn){
//     console.log("please wait uploading captioned image");
//     setTimeout(()=>{
//         fn("image uploaded finally")
//     },6000)
// }
// step1(function(image){
//     console.log(image)
//     step2(image,function(filter){
//         console.log(filter)
//         step3(filter,function(caption){
//             console.log(caption)
//             step4(function(caption){
//                 console.log(caption)
//             })
//         })
//     })
// })




// function step1(fn){
//     console.log("start making cheese");
//     setTimeout(()=>{
//         fn("cheese is ready 🧀")
//     },2000)
// }
// function step2(fn){
//     console.log("start making base");
//     setTimeout(()=>{
//         fn("base is ready 🧀🧀")
//     },4000)
// }
// function step3(fn){
//     console.log("topping is adding now");
//     setTimeout(()=>{
//         fn("topping is added 🧀🧀")
//     },6000)
// }
// function step4(fn){
//     console.log("pizza is heating");
//     setTimeout(()=>{
//         fn("now pizza is time to eat")
//     },7000)
// }
// step1(function(cheese){
//     console.log(cheese);
//     step2(function(base){
//         console.log(base);
//         step3(function(topping){
//             console.log(topping)
//             step4(function(piz){
//                 console.log(piz)
//             })
//         })

       
//     })
// })






// function step1(fn){
//     console.log("file is start downloading");
//     setTimeout(()=>{
//         fn("file is downloaded successfully");
//     },2000)
// }

// function step2(fn){
//     console.log("file is start compress");
//     setTimeout(()=>{
//         fn("file is compressed successfully");
//     },4000)
    
// }
// function step3(fn){
//     console.log("file is start uploading");
//     setTimeout(()=>{
//         fn("file is uploaded successfully")
//     },5000)
// }

// // this process is known as call back hell
// step1(function(download){
//     console.log(download);
//     step2(function(compress){
//         console.log(compress)
//         step3(function(upload){
//             console.log(upload)
//         })
//     })
    
// })


// function rtc(){
//     console.log("Please complete te form!!")
// }
// setTimeout((rtc),5000);

// setTimeout(()=>{
//     alert('this alert appear in 3 second')
// },3000)

// function fun(){
//     console.log("Please complete te form!!")
// }
// setTimeout(fun,5000);

// const intervalId = setInterval(() => {
//     console.log('Executed every second');
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Stopped after 5 seconds');
//   }, 5000);



// one way of doing but this is not the right way to do code
// function step1(fn){
//     console.log("pls wait i am selecting image");
//     setTimeout(()=>{
//         fn("image selected");
//     },4000);
// }
// function step2(fn){
//     console.log("pls wait i am appllying filter on image");
//     setTimeout(()=>{
//         fn("filtered image");
//     },5000);
// }
// // this is known as pyramid of doom and called is a call back hell
// step1(function(image){
//     console.log(image);
//     step2(function(filter){
//         console.log(filter);
//     })
// });

