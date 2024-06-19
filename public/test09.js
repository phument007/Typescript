"use strict";
//Inheritance 
class students {
    getName(name, gender) {
        return `Name : ${name} , Gender : ${gender}`;
    }
}
class Teacher extends students {
    getName(name, address) {
        return `My Name is : ${name}, My Address : ${address}`;
    }
}
const object = new Teacher();
console.log(object.getName("Kaka", "KPT"));
