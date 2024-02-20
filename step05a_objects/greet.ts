// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }
// console.log(teacher.name);
// console.log(teacher["experience"]);
// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }
// student = {
//     name: "Hira",
//     age: 30
// }
// console.log(student["name"]);
// console.log(student.age);
// This is 
// type greet = {
//     Name:string,
//     Age:number,
//     Skills:string[],
//     Experience?:string
// }
// let greet:greet = {
//     Name: "yousuf",
//     Age: 23,
//     Skills:["Web-Developer", "Graphic-Designer"],
//     Experience: "2 years"
// }
let greet: {
    Name: string;
    Age: number;
    Skills: string[];
    Experience?: string;
} = {
    Name: "yousuf",
    Age: 23,
    Skills: ["Web-Developer", "Graphic-Designer"],
    Experience: "2 years"
};
