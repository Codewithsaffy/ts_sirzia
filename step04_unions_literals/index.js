"use strict";
let myname1;
myname1 = 23;
console.log(myname1);
myname1 = "Hello";
console.log(myname1);
console.log(myname1.toString());
console.log(myname1.toLowerCase());
// if else ka tareeka 
let newage1 = Math.random() > 0.6 ? "Khan" : 6;
if (newage1 === "Khan") {
    newage1 = newage1.toUpperCase();
}
if (typeof newage1 === "string") {
    newage1 = newage1.toUpperCase();
}
typeof newage1 === "string" ? newage1 = newage1.toUpperCase() : newage1 = newage1.toFixed();
console.log(newage1);
let yourName1 = Math.random() > 6 ? "Yousuf" : undefined;
if (yourName1) {
    yourName1.toLowerCase();
}
let check;
check = 432;
check = "Dist";
check = null;
// check = undefined  //{Error}
let Id;
let all;
all = 23;
all = "string";
all = null;
all;
