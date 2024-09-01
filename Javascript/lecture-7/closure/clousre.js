// let count=0;
// function getcount(){
//     return count;
// }
// function increment(){
//     return count+=3;
// }
// function decrement(){
//     count--;
// }
// function reset(){
//     count =0;
// }

// console.log("Initial count:", getcount()); 
// increment();
// console.log("After increment:", getcount());
// decrement();
// console.log("After decrement:", getcount()); 
// reset();
// console.log("After reset:", getcount()); 


// function counter(){
//     let count=0;
//     let ret={
//         getcount:function(){
//             console.log(count)
//         },
        
//         increment:function(){
//             count+=1
//         },
//         decrement:function(){
//             count-=1
//         },
//         reset:function(){
//             count=0;
//         }

//     }
//     return ret
// }

// let counting=counter();
// counting.getcount();
// counting.increment();
// counting.increment();
// counting.increment();
// counting.getcount();
// counting.decrement();
// counting.getcount();
// counting.reset()
// counting.getcount();


// function fun(){
//     let a=10;
//     function fun2(){
//         console.log(a);
//     }
//     return fun2;
// }
// let result=fun();
// result()

// function createCounter() {
//     let count = 0; // Private variable

//     return function() {
//         count += 1;
//         console.log(count);
//     }
// }


// let counter = createCounter();
// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3


// function x(){
//     let count=0;
//      function y(){
//         count +=1;
//         console.log(count);
//     }
//     return y;
// }
// let result=x()
// result()
// result()
// result()
// result()
// result()


// function fun(){
//     let a=10;
//     function fun2(){
//         let b=20;
//         function fun3(){
//             console.log(a);
//             function fun4(){
//                 console.log(b);
//             }
//             fun4();
//         }
//          fun3()
//     }
//      fun2()
// }

// fun()
// console.log(a);

// let a=10;
// console.log

const obj = {
    name: 'Bob',
    greet: () => {
        console.log(this.name);
    }
};

console.log(obj)