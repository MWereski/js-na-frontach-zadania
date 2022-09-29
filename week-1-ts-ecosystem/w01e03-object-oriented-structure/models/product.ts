import {ProductType} from "../enums/productType";

export class Product{
    name: string;
    amount: number;
    price: number;
    type: number;

    constructor(name: string, amount: number, price: number = 0, type: number = ProductType.ForFree) {
        this.name = name;
        this.amount = amount;
        if(type == ProductType.ForFree) this.price = 0;
        else this.price = price;
        this.type = type;
    }
}