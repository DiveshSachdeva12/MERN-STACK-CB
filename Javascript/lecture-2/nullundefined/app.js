// let num; /* undefined give js engine by default but null value given by developers */
// console.log(num)

// let num1=null; /* developers used null value  */
// console.log(num1)

// for(let i =0;i<=10;i++){
//     console.log(i);
// }



//  let i =0;
//  while(i<=10){
//     console.log(i)
//     i++;
//  }

// for off used in array
// for in used in object

// array is a hetrogenious in javscript means having diffrent value
// let arr = ["rollno:",229028]
// access array using index number 
// console.log(arr[0],arr[1]);

// arrray ko string main bhi access kr sakte ha 
// two d array
// let arr1=[10,[200,[3000,4000,5000],300,400],30]
// console.log(arr1[1][1][1]);






// diff between array or object means the ordered of array remain same jese store karware ha wese hi store hoga lekin object are unordered
let name ={
    name:"divesh",
    rollno:"229028"
}
// console.log(typeof(name));
// console.log(name[name]); /* not access without string  */
// console.log(name["name"]); /*  access with string  */
// keys are always stored as string

// always access an element by using dot fir key name
console.log(name.name)