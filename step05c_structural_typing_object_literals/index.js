"use strict";
//todo Programming is consist of tree type of typing :- 1) Duck Typing 2) Structural Typing 3) Nominal Typing
//* Duck Typing:
//? In structural typing we write minimum code but it is not save because it can't show error during typing 
let check = {
    name: "Yousuf",
    class: 23,
    parentsNmae: { father: "Noushad", mother: "Hina" }
};
let check2 = {
    name: "Yousuf",
    class: 23,
    age: 20,
    parentsNmae: { father: "Noushad", mother: "Hina" }
};
// check2 = check // Give error 
// check2 = check2 // Give error 
