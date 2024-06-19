"use strict";
//Non Return Function
function show() {
    let name;
    name = "Pot Phument";
    console.log(name);
}
show();
//Has Return Function
function calc(a, b) {
    return a + b;
}
const gretting = (name) => {
    return `${name} The PHP Developer`;
};
console.log(calc(10, 30));
console.log(gretting("Phument"));
