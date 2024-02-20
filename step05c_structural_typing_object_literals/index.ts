//todo Programming is consist of tree type of typing :- 1) Duck Typing 2) Structural Typing 3) Nominal Typing
//* Duck Typing:
                    //? In structural typing we write minimum code but it is not save because it can't show error during typing 

//* Structural Typing:
                // ?  In Structural typing we write code maximum but it save because it show error before compilation of code

//* Nested Object:
              // ? wo object hota hai jis k under furthur object banasakte hai 
              
interface check {
    name:string
    class:number
    parentsNmae:{father:string,mother:string }
  }
interface check2 {
    name:string
    class:number
    age:number
    parentsNmae:{father:string,mother:string }
  }
let check:check = {
    name:"Yousuf",
    class:23,
    parentsNmae:{father:"Noushad",mother:"Hina"}
}
let check2:check2 = {
    name:"Yousuf",
    class:23,
    age:20,
    parentsNmae:{father:"Noushad",mother:"Hina"}
}
// check2 = check // Give error 
// check2 = check2 // Give error 

