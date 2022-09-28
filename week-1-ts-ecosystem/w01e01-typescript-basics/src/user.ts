import {Address} from "./address";

export class User {
    name: string;
    age: number;
    email: string;
    address?: Address;

    constructor(name: string, age: number, email: string, address?: Address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    hasAddress(): boolean {
        return Boolean(this.address)
    }

    hasGivenAge(requiredAge: number): boolean {
        return this.age >= requiredAge
    }
}
