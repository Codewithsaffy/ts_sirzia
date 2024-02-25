// // anonymous

import { colorNames } from "chalk";
// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }
// //* Type in ts 

type studClass = {
    name: string;
    FatherName: string;
}
type studName = {
    age: number;
    class: number;
}
type DataOption = studClass | studName

let studentDetailOption: DataOption = {
    name: "Yousuf",
    FatherName: "Noushad Ali Khan",
    age: 18
}
type DataExect = studClass & studName

let StudectExectDetail: DataExect = {
    name: "Yousuf",
    age: 18,
    FatherName: "Noushad Ali Khan",
    class: 11
}

// interface in ts 

interface collegeString {
    name:string
    FatherName:string
}
interface collegeNumber {
    class:number
    age:number
}

interface Data extends collegeNumber, collegeString{}

let  FullDetail:Data = {
    name:"Yousuf",
    class:4,
    age:8,
    FatherName:"Noushad Ali Kdan"
}

// Differance Between Type And Interface

//todo (1)-> In type we can use union "|" but in interface we can not use union "|" 
                                            //todo (2)-> In type we can not redeclered same type name  but in interface we can  reclered same type name

//? Example:-

interface stud {
    name:string
}
interface stud {
    age:number
}


