//Non Return Function
function show(){
    let name:string
    name = "Pot Phument";
    console.log(name);
}

show();

//Has Return Function
function calc(a:number,b:number) : number{
    return a+b;
}
const gretting = (name:string) : string => {
    return `${name} The PHP Developer`;
}

console.log(calc(10,30));
console.log(gretting("Phument"))
