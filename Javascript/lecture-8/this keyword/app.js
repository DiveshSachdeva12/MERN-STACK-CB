// direct calling / function calling ===>>>
// function divesh(){
//     console.log(this)
// }
// divesh()

// object invocation==========>>>>
// it always point to inside that whcih method is available
// let obj={
//     a:10,
//     fn:function(){
//         console.log(this)
//     }
// }
// obj.fn();


// now the prove of how it is being called

// let obj={
//     a:10,
//     fn:function(){
//         console.log(this); /* it will point to obj because fn is depend on obj */
//         function divesh(){
//             console.log(this); /*  it will point to window divesh is not depend
//              */
//         }
//         divesh(); /* direct calling */
//     }
// }
// obj.fn() /* method calling  */



// let obj={
//     a:10,
//     fn:function(){
//         console.log(this); /* window*/
//         function divesh(){
//             console.log(this); /*window
//              */
//         }
//         divesh(); /* direct calling */
//     }
// }
// let divesh =obj.fn /* THIS KEYWORD DEPEND ON WAY OF CALLING  */
// divesh();

// let objj={
//     a:1,
//     fn:function(){
//         console.log(this); /* object  */
//         let fnn = function(){
//             console.log(this); /* window */

//         }
//         return fnn;
//     }
// }

// let out = objj.fn();
// out();

// 3.contructor function
// function fun(){
//     this.name="Divesh"
// }
// let obj=new fun();
// let obj2=new fun();
// console.log(obj)
// console.log(obj2)



// 4.indirect calling =>> call, apply, bind
// call=== to change the refrence of {this} keyword
// apply===
    