"use strict";
//Generic Type : គឺជាការយក parameter មកដាក់នៅក្នុង Type
// type ApiResponse<T> ={
//     data: T,
//     message : string,
//     status : number
// }
// const response:ApiResponse<string[]> = {
//     data : [],
//     message : "Success",
//     status : 200,
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(response.status); 
// //Utility Type 
// type People = {
//     name : string,
//     age : number,
//     address?: string
// }
// type People2 = Required<People>
// // type People2 = Partial<People>
// const p: People2 = {
//     name : "Phument", 
//     age : 21,
//     address : "Phnom Penh"
// }
// console.log(p.age);
//Record 
const p = {
    name: "Pot Phument",
    age: "23",
};
console.log(p.name);
