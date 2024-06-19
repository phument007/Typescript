//Inheritance 
class car{
    protected name:string = "";
    protected year:number = 0;
    constructor(name:string,year:number){
        this.name = name;
        this.year = year;
    }
    public getCarName(){
        return this.name;
    }
    public getCarYear(){
        return this.year;
    }
}

class BMW extends car{
    private price:number = 0.0;
    constructor(name:string,year:number,price:number){
        super(name,year);
        this.price = price;
    }
    public getCarName(){
        return super.getCarName();
    }
    public getCarYear(){
        return super.getCarYear();
    }
    public getCarPrice(){
        return this.price;
    }
}

const bmw = new BMW("BMW",2020,1000000000);

console.log(bmw.getCarName(),bmw.getCarPrice(),bmw.getCarYear());