import {Price} from "./price";

export class Item{
    name: string;
    amount: number;
    unit: string;

    price: Price;

    constructor(name: string, amount: number, unit: string, price: Price) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.price = price;
    }
}