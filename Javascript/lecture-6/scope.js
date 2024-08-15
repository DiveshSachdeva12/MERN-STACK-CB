// {
//     console.log("hello");
// }

// let a=10;
// {
//     console.log(a);
// }


// global declared
// var a=10;
// function sayname(){
// a=10;
// console.log(a);
// }
// console.log(a);
// sayname();


// script 
// let a=20;
// function sayname(){
// a=10;
// console.log(a);
// }
// sayname();
// console.log(a);


// in script 

// function sayname(){
//     var name1="Divesh";
//     console.log(name1);
// }

// console.log(name1);
// sayname();


// if(true){
//     var name1="Divesh"
//     console.log(name1);
// }
// console.log(name1);




// function sayname(){
//     var a=10;
//     return a
// }
// sayname();

// let a=10;
// function divesh(){
//     a=20;
//     console.log(a);
// }
// divesh();
// console.log(a)s;

// console.log(x);
// let x;
// x=10;
// console.log(x);

// scope example

// global scope
// let global="i will show in script tag";

// function sayname(){
//     console.log(global);
// }
// sayname();
// console.log(global);

// function scope


// function scope(){
//     let functionscope="i am a function scope";
//     console.log(functionscope);
    
// }
// scope();
// console.log(functionscope);


// function scope(){
//     var functionscope="i am a function scope";
//     console.log(functionscope);
    
// }
// scope();
// console.log(functionscope); 


// in var case it will be globally access 
// if(true)
// {
//     var block1="i am a block scope";
//     console.log(block1);
// }
// console.log(block1);


// but in let case throw refrence error
// if(true)
// {
//     let block1="i am a block scope";
//     console.log(block1);
// }
// console.log(block1);



// function divesh(){
//     if(true){
//         var fun="i am a function scope with var";
//     }
//     console.log(fun);
// }
// divesh()


// function outerfun(){
//     let outerfun1='i am outer';
//     function inner(){
//         console.log(outerfun1);
        
//     }
//     inner();
// }


// outerfun();



// var globalvar='global varible';
// function overwritegloval(){
//     let globalvar='local variavle';
//     console.log(globalvar);
    
// }
// overwritegloval();
// console.log(globalvar);

// var d=100; /* global */
// let s="divi"; /* script */
// if(true){
//     var w="rem"; /* global */
//     let a=10; /* block */
//     let b=10; /* block */
//     console.log(w); 

//     console.log(a);
//     console.log(b);
// }
// console.log(w);
// console.log(a);
// console.log(b);


// function fun(){
//     divesh="i am Divesh";
// }
// fun();
