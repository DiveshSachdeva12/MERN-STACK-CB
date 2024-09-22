// upper se niche ana event capturing
// niche se upper jana event bubbling
// true matlab capturing
// false matlab bubbling
// let grand = document.querySelector('#grandparent')
// let pare = document.querySelector('#parent')
// let child = document.querySelector('#child')

// grand.addEventListener('click',function(){
//  console.log("main hoon dada")
// },true)

// parent.addEventListener('click',function(){
//     console.log("main hoon papa")
    
// },true)

// child.addEventListener('click',function(){
//     console.log("main hoon beta")
// },true)

let grand = document.querySelector('#grandparent');
let parent = document.querySelector('#parent');
let child = document.querySelector('#child');

grand.addEventListener('click', function() {
    console.log("main hoon dada");
}, true);

parent.addEventListener('click', function() {
    console.log("main hoon papa");
}, true);

child.addEventListener('click', function() {
    console.log("main hoon beta");
}, true);


// e.propogation

// event lifecycle is the process of traversal of event depending on the third argument

// true - capturing (upper se niche)
// false -bubbling (niche se upper)
// all the event start traversing fromm html then moves forward to body then grand parent then parent and at last child {target element}
// and in the similar fashion after the completion of task in the target phase it moves back in the same hierarchy{bubbling}
//  we know about the event object and inside that object we have a ,method stop {propagation} the role of this method is to stop the process of event flowing whenver this is triggered doest matter whichever phase we are working on 
// interview quesiton what is event life cycle or what is stop propagation