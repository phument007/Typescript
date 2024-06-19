//Class OOP
// class people{
//     private name:string;
//     private gender: string;
//     private  subject: string;

//     public constructor(name:string,gender:string,subject:string){
//         this.name = name;
//         this.gender = gender;
//         this.subject = subject;
//     }

//     public show() {
//         console.log("Name : "+this.name);
//         console.log("Gender : "+this.gender);
//         console.log("Subject : "+this.subject);
//     }
// }

// const p = new people("Pot Phument","Male","Laravel Developer");
// p.show();

//Readonly
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  
  public getName(): string {
    return this.name;
  }
}

const person = new Person("PHUMENT DEVELOPER");
console.log(person.getName());



