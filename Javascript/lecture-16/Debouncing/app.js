// let input = document.querySelector("input");
// let counter=0;
// bina debouncing ke

// input.addEventListener('keypress',function(event){
// fun()
// })
// ==============================================
// debouncing ke sath
// let counter=0
// function fun() {
//   console.log("api call ho rahi ha ",counter++);
// }

// // ====================
// function DebouncFun(fn, delay) {
// // return a debounce a function
// let timer=0; /* clear previous api */
//   return (...args) => {
//     if(timer) clearTimeout(timer)
//       timer = setTimeout(()=>{
//       fn(...args); /* api call hora ha  */
//     },delay)
//   };
// }

// const DebocunedFunction = DebouncFun(fun, 1000);
// // ============================================
// const input=document.querySelector('input')
// input.addEventListener('input',DebocunedFunction)

// fun()
// if(event.which===13){
//     console.log(input.value)
//     input.value=""
// }
// if(event.key==="Enter"){
//     console.log(input.value)
//     input.value=""
// }
// console.log(event)

// fun()
// if(event.which===13){
//     console.log(input.value)
//     input.value=""
// }
// if(event.key==="Enter"){
//     console.log(input.value)
//     input.value=""
// }
// console.log(event)


// You can toggle `shouldRun` based on your logic
// shouldRun = false; // To stop the throttled function execution
// shouldRun = true;  // To resume the throttled function execution
