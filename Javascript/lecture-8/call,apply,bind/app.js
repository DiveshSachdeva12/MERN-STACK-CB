// let obj2={
//     name:"sachin",
//     surname:"tendulkar"
// }
let obj={
    name:"divesh",
    surname:"sachdeva",
    fn:function(kaam,age){
           console.log(this.name," ",this.surname," ",kaam," ",age)
        }
}
console.log(obj.fn("direct calling ha ","40"))

// obj.fn();
// let output=function(kaam){
//    console.log(this.name," ",this.surname," ",kaam)
// }
// output.apply(obj,["lead karta ha "]); 

let obj2={
    name:"sachin",
    surname:"tendulkar"
}
obj.fn.call(obj2,"call method","40") /* call method  */
obj.fn.apply(obj2,["apply","40"]) /* apply method */

// bind method
let out=obj.fn.bind(obj2)
console.log(out("bind method ha","40"))