let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)

let Myclass:unknown = 23;
console.log(Myclass as number)
