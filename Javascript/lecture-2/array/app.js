// array is a hetrogenious in javscript means having diffrent value
// let arr = ["rollno:",229028]
// access array using index number 
// console.log(arr[0],arr[1]);

// arrray ko string main bhi access kr sakte ha 
// two d array
// let arr1=[10,[200,[3000,4000,5000],300,400],30]
// console.log(arr1[1][1][1]);


// let arr=["apple ","mango","banana"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// ----------------------------------------------------------------------
// method of array 

// Adding Elements: in array
// 1.push push(): Adds an element to the end of an array.
// 2.unshift(): Adds an element to the beginning of an array

// let arr=["apple ","mango","banana"];
// arr.push("chocolate");
// arr.unshift("pineapple");
// console.log(arr);

// -----------------------------------------------------------------------
// Removing Elements in an array :

// 1.pop(): Removes the last element from an array:.
// 2.shift(): remove an element to the beginning of an array
// let arr=["apple","mango","banana"]
// arr.pop()
// arr.shift()
// console.log(arr);


// --------------------------------------------------------------------
// finding an element :
// indexOf(): Returns the first index at which a given element can be found
// includes():Checks if an array contains a certain element 



// indexof:
// let fruits=["apple","banana","pineapple","guava"];
// console.log(fruits)
// let index= fruits.indexOf("banana"); it given an index number 
// console.log(index)


// includes:
// includes(): tell is the element is in array or not 
// let fruits=["apple","banana","pineapple","guava"];
// let hasfruits = fruits.includes("guava");
// console.log(hasfruits);


// ------------------------------------------------------------------
// length of the array :
// let cars = new Array("divesh","kumar","sachdeva")
// let length=cars.length
// console.log(length)
// ------------------------------------------------------------------

// two dimensional array : 
// let matrix=[[1,[2.1,2.2,2.3],3],[3,4,5],[6,7,8]]
// console.log(matrix[0])
// console.log(matrix[0][1])
// console.log(matrix[1])
// console.log(matrix[2])
// ------------------------------------------------------------------

// JavaScript Array concat() 
// let arr= new Array("apple","mango","banana")
// let arr2= new Array("orange","pineapple","guava")
// let fruits=arr.concat(arr2);
// console.log(fruits)


// -------------------------------------------------------------

// We can define array with new or array keyword
// let cars= new Array("divesh","kumar","sachdeva")
// let length=cars.length
// console.log(length)

// let index=cars.indexOf("kumar");
// console.log(index)