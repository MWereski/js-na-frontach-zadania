import {Product} from "./product";
import {ProductType} from "../enums/productType";

export class Cart{
    products: Product[];
    type: number = -1;

    constructor() {
        this.products = []
    }

    AddProduct(product: Product){
        if(this.type==-1) this.type = product.type;

        if(this.type != product.type){
            console.log("Wrong product type!")
            return false;
        }
        else{
            console.log("Product added!")
            this.products.push(product)

        }
        return true;
    }

    GetProduct(id: number){

        if(this.products[id]) return this.products[id];

        console.log(`Product with id:${id} not found!`)
        return undefined;

    }

    DeleteProduct(product: Product){

        const id = this.products.indexOf(product)
        if(id>=0){
            this.products.splice(id, 1);
            console.log(`Product 
    Id: ${id} - Name: ${product.name}, Amount: ${product.amount}, Price: ${product.price}, Type: ${ProductType[product.type]} 
deleted!`)
            return true
        }

        console.log(`Product not found!`)
        return false;
    }

    UpdateProduct(id: number, newProduct: Product){
        const product = this.GetProduct(id);
        if(!product){
            console.log("Update Failed!")
            return false;
        }

        if(this.type != newProduct.type){
            console.log("Wrong product type!")
            console.log("Update Failed!")
            return false;
        }
        console.log("Product Updated!")
        this.products[id] = newProduct;
        return true;

    }

    ListProduct(){
        console.log("Current List of product:")

        this.products.forEach((product: Product, id: number) => {
            console.log(`Id: ${id} - Name: ${product.name}, Amount: ${product.amount}, Price: ${product.price}, Type: ${ProductType[product.type]}`)
        });
    }

    SumOfProductsAmount(){
        let sum = 0;
        this.products.forEach((prod) => {
            sum += prod.amount;
        })

        return sum;
    }

    SumOfProducts(){
        return this.products.length;
    }

    SumOfProductsPrices(){
        let sum = 0;
        this.products.forEach((prod) => {
            sum += (prod.amount * prod.price);
        })

        return sum;
    }

}