"use strict";
//Array 
// const ages: number[] = [13,45,70];
//Tuple Code
// const information: [string,number,boolean] = ["Phument",21,false];
// //Assign value to Tuple 
// const [firstname,age,isMarried] = information;
// console.log(firstname,age,isMarried);
//Enum 
// enum Color{
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue",
//     White = "White",
// }
// console.log(Color.Blue,Color.Red,Color.White);
//Type Aliases 
// type n = number;
// type s = string;
// type Person = {
//     name : s,
//     gender : s,
//     age : n,
//     address : s,
// }
// const Students : Person = {
//     name : "Pot Phument",
//     gender : "Male",
//     age : 22,
//     address : "Phnom Penh",
// }
// console.log(Students.name,Students.gender,Students.age,Students.address);
//Define Object Type
// type Person = {
//     name : string,
//     age : number,
//     isMarried : boolean,
// }
// const person : Person = {
//     name: "Pot Phument",
//     age: 21,
//     isMarried: false
// }
// console.log(person.name,person.age,person.isMarried);
//Interface 
// interface Person1  {
//     name : string,
//     age : number,
//     gender : string,
// }
// interface Teacher extends Person1{
//     subject : string,
// }
// const show:Teacher = {
//     name : "Pot Phument",
//     age : 22,
//     gender : "Male" ,
//     subject : "Laravel Framwork",
// }
// console.log("Name :"+show.name)
// console.log("Gender : "+show.gender)
// console.log("Age : "+show.age)
// console.log("Subject : "+show.subject);
// const person2: Person1 = {
//     name: "Phument",
//     age: 21,
//     isMarried: false
// }
// interface Window1 {
//     ts : string
// }
// interface Window2 extends Window1{
//     bun: string,
// }
// const test : Window2 = {
//     ts : "TypeScript",
//     bun : "Bun"
// }
//Union Type 
// const x:string | number =  "10";
// //check type 
// if(typeof x === "string"){
//     console.log("x ="+ x +" (string)");
// }else{
//     console.log("x ="+ x +" (number)");
// }
// //Casting 
// let n : any = "10";
// let m : any = 20;
// const Test1 = parseInt(n);
// const Test2 = m.toString();
// if(typeof Test1 === "string"){
//     console.log(Test1+" : The element of this variable is a String");
// }else{
//     console.log(Test1+" : The element of this variable is a Number");
// }
// if(typeof Test2 === 'string'){
//     console.log(Test2+" : The element of this variable is a String");
// }
