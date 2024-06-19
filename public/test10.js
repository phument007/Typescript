"use strict";
//Inheritance 
class car {
    constructor(name, year) {
        this.name = "";
        this.year = 0;
        this.name = name;
        this.year = year;
    }
    getCarName() {
        return this.name;
    }
    getCarYear() {
        return this.year;
    }
}
class BMW extends car {
    constructor(name, year, price) {
        super(name, year);
        this.price = 0.0;
        this.price = price;
    }
    getCarName() {
        return super.getCarName();
    }
    getCarYear() {
        return super.getCarYear();
    }
    getCarPrice() {
        return this.price;
    }
}
const bmw = new BMW("BMW", 2020, 1000000000);
console.log(bmw.getCarName(), bmw.getCarPrice(), bmw.getCarYear());
