// how is js running bts: or browser ke ander >js engine ke adner> call stack (js ka code run karta ha) 
// whenever a javascript code runs a global execution context {gec} is executed
// inside that {gec} we have two diffrent phases 1. is mcp{memory creation phase} and phase no 2. is {cep} code execution phase
// the role of mcp is to allocate memory  1. to the varible and  2. to the function
// this phase run this mcp phase run even before a single line of code is executed
// {cep} occurs after the completion of mcp and the role of cep is to execute the code line by line
// when ever a function is called then new execution context is created
// and inside that exectuion context we AGAIN HAVE TWO PHASES
// PHASE NO 1 MCP AND PHASE NO 2 . CEP 
// whenever  a gec is created along with it a  global object is also created {window} 


// function sum(){
//     if(true){
//         var a=10;
//         console.log(a);
//     }
// }
// sum();

