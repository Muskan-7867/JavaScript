/* Hoisting is a concept that enables us to extract values of variables 
and functions even before initializing/assigning value without getting errors and this
 happens during the 1st phase of the Execution Context. */

 //you can use variables and functions in your code even before they are declared in the source code.

 //hoisting with variable declarations:
console.log(x); // undefined
var x = 5;
console.log(x); // 5
//in this  the declaration of x is hoisted to the top of its scope during compilation

//declarations are hoisted, not the initializations. 

//hoisting with functon declaration
sayHello(); // "Hello, hoisting!"
function sayHello() {
  console.log("Hello, hoisting!");
}




