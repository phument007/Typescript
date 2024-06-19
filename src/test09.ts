//Inheritance 

// interface data{
//     setData(name:string,gender:string,age:number):any
// }

// class students implements data{
//    public setData(name: string, gender: string, age: number) {
//         console.log("Name : "+name);
//         console.log("Gender : "+gender);
//         console.log("Age : "+age);
//    }
// }

// const object = new students();
// object.setData("HTML", "Male", 21);

// class data{
//     protected name:string = "";
//     protected gender: string = "";
//     protected  age: number = 0;

//     public setData(name:string,gender:string,age:number){
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }

//     public show() {
//         console.log("Name : "+this.name);
//         console.log("Gender : "+this.gender);
//         console.log("Age : "+this.age);
//     }
// }
// class Teacher extends data {
//     private subject:string = "";
//     public setDataTeacher(name:string,gender:string,age:number,subject:string){
//         super.setData(name,gender,age);
//         this.subject = subject;
//     }
//     public show() {
//         super.show();
//         console.log("Subject : "+this.subject);
//     }

// }

// const object = new Teacher();
// object.setDataTeacher("Pot Phument", "Male", 21, "Javascript");
// object.show();

//abstract
// abstract class fruit{
//     public name:string = "";
//     public constructor(name:string){
//         this.name = name;
//     }
//     abstract setData(name:string,qty:number,price:number):any;
//     abstract getCustomer():string;
// }
// class apple extends fruit{ 
//   public constructor(name:string){
//     super(name);
//   }
//   public getCustomer():string{
//     return this.name;
//   }
//   public setData(name:string,qty:number,price:number):any{  
//     let total = qty * price; 
//      return  {
//           "Name" : name,
//           "Qty" : qty,
//           "Price" : price,
//           "Pay" : total,
//        }
//   }
// }
// const object = new apple("Phument");
// let alldata = object.setData("Apple",10,3);
// console.log("Customer Name: "+object.getCustomer());
// console.log("----------Product Detail------------");
// console.log("Fruit Name : "+alldata.Name);
// console.log("Fruit Qty : "+alldata.Qty+" Kg");
// console.log("Fruit Price : "+alldata.Price+"$/1Kg");
// console.log("Payment for Apple : "+alldata.Pay+" $");

//Override
interface data{
    getName(name:string,gender:string):string
}

class students implements data{
    public getName(name: string,gender:string): string {
       return `Name : ${name} , Gender : ${gender}`;
   }
}

class Teacher extends students{
    public override getName(name: string,address:string): string {
       return `My Name is : ${name}, My Address : ${address}`;
   }
}

const object = new Teacher();
console.log(object.getName("Kaka","KPT"));











