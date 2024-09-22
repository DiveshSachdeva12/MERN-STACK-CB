// inner text with css 
// textcontext is brainless css ko read nhi kar payega without css


// let result = document.querySelector('h1');
// console.log(result.innerText) /* brainful */
// console.log(result.textContent); /* brainless */



// we can use inner text text content and inner html anywhere except input 
// input are treated with value
// it also work as a getter or setter
// result.innerText="happy new year";
// result.textContent="<i>happy new year</i>"; /* text content not read idomatic tag but  */
// result.innerHTML="<i>happy new year</i>"; /* it consider or read idomatic tag 6*/

// i ka matlab idometic

// let output= document.querySelectorAll('a');
// let inp=document.querySelector('input')
// console.log(output[0].getAttribute('href'));
// console.log(output[1].getAttribute('href'));
// console.log(output[2].getAttribute('href'));
// console.log(inp.getAttribute('type'));

// getter argument accept karta ha 1 or stter 2 argument accept karta ha 
// output[0].setAttribute('href','https://www.instagram.com'); 


// at home practise ==========================================
// let h1= document.querySelector('h1')
// console.log(h1.innerText) /* brainful */ ✅
// console.log(h1.innerHTML) /* brainful */ ✅
// console.log(h1.textContent)  /* brainless  do not read css ❌ */

// manipulate the value
// console.log(h1.innerText="<i>hello world</i>")
// console.log(h1.innerHTML="<i>hello world</i>")
// console.log(h1.textContent="<i>hello world</i>")


    // get attribute
    // let anchor = document.querySelectorAll('a')
    // console.log(anchor)

    // console.log(anchor[0].getAttribute('href'))
    // console.log(anchor[1].getAttribute('href'))
    // console.log(anchor[2].getAttribute('href'))


// set attribute
// anchor[0].setAttribute('href',"https://www.instagram.com")
// anchor[1].setAttribute('href',"https://www.twitter.com")



// manipulation of input tag
// let input= document.querySelector('input')
// // console.log(input)
// console.log(input.getAttribute('type'))
// input.setAttribute('type','checkbox');

// let h1 = document.querySelector('h1')
// console.log(h1)


// // using innerText it return the content only inside the tag
// console.log(h1.innerText) /* brainfull */

// // using innerHtml
// // it return the content as well as element inside the tag
// console.log(h1.innerHTML) /* brainfull */


// // using Text content
// // it will display the content as well as it will display the hidden property 
// console.log(h1.textContent) /* brainless */

