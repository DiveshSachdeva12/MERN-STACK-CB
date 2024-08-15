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


function counter(){
    let count=0;
    let ret={
        getcount:function(){
            console.log(count)
        },
        
        increment:function(){
            count+=1
        },
        decrement:function(){
            count-=1
        },
        reset:function(){
            count=0;
        }

    }
    return ret
}

let counting=counter();
counting.getcount();
counting.increment();
counting.increment();
counting.increment();
counting.getcount();
counting.decrement();
counting.getcount();
counting.reset()
counting.getcount();