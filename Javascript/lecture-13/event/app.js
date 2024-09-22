// let puttar= document.querySelector('h1')

// function ramdev(){
//     console.log("yoga se hi hoga")
// }
// function ramrahim(){
//     console.log("youre my love charger")
// }

// ek action mar multiple reaction nhi possible vo chalega jo baad main aya 
// puttar.onclick=ramdev;
// puttar.onclick=ramrahim;

// solution addeventlistener() you can do multiple task by using add event listener
// puttar.addEventListener('click',ramdev )
// puttar.addEventListener('click',ramrahim )


// let inp= document.querySelector('input')
// // console.log(inp.innerText) /* nahi bane */
// // console.log(inp.value) /* nahi bane */

// inp.addEventListener('input',function(){
//     console.log(inp.value)/* getter */
// })
// inp.value="divesh" /* setter */

// let inp= document.querySelector('input')
// inp.addEventListener('input',function(event){
//     // console.log(inp.value)
//     console.log(event.target.value)
// })


// key down key up
// let inp= document.querySelector('input')
// inp.addEventListener('keydown',function(e){
//     if(e.which===13){
//         console.log(e.target.value);
//     }
// })

// parctise at home =====================================================

let btn= document.querySelector('button');

function ramdev(){
    console.log("yoga se hi hoga")
}
function ramrahim(){
    console.log("chor hai sala")
}
// // problem hai ek bari main ek hi execute hoga dono nhi 
// btn.onclick= ramdev
// btn.onclick= ramrahim


// btn.addEventListener('click',(event)=>{
//     ramdev()
//     console.log(event)
//     console.log(event.target)
//     console.log(event.type)
    
// })
// btn.addEventListener('click',()=>{
//     // console.log("the button was clicked 2 times here")
//     ramrahim()

// })



// object in event 
// btn.onclick=(event)=>{
//     console.log(event)
//     console.log(event.type)
//     console.log(event.target)
//     console.log(event.which)
//     console.log("hello now everything is good ")
// }
// btn.ondblclick=()=>{
//     console.log("this is double click 2 times ")
// }

// toggle button

// let toggle= document.querySelector('button')
// let body= document.querySelector('body')
// let currmode= "light"

// toggle.addEventListener('click', ()=>{
//     if(currmode==="light"){
//         currmode="dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
//     else{
//         currmode="light";
//         // body.classList.add('light')
//         body.classList.add("light")
//         body.classList.remove("dark") 
//     }
//     console.log(currmode)
// })