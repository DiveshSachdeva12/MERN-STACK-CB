// setTimeout(() => {
    
//     console.log("hi divesh")
// }, 5000);
// set interval

// let id= setInterval(()=>{
//     console.log("2sec..")
// },4000)
// let iddd= setInterval(()=>{
//     console.log("3sec..")
// },4000)

// setTimeout(()=>{
//     clearInterval(id);
// },10000)


// clear interval and clear timeout


// let cls=setInterval(()=>{
//     console.log("hi this is set interval");
// },6000)

// setTimeout(()=>{
//     clearInterval(cls);
// },7000);
const intervalId = setInterval(() => {
    console.log('Executed every second');
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped after 5 seconds');
  }, 5000);
  