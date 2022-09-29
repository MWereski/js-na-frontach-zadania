import {Cart} from "../models/cart";
import {Product} from "../models/product";
import {ProductType} from "../enums/productType";

export function testCart(productCount: number, productType: number, maxAmount: number, maxPrice: number){
    console.log("===== TEST CART ====")

    const cart = new Cart();

    let p;
    for(let i = 0; i < productCount; i++) {
        p = new Product((Math.random() + 1).toString(36).substring(2), Math.floor(Math.random() * maxAmount)+1, Math.floor(Math.random() * maxPrice), productType);
        cart.AddProduct(p)
    }

    const wrongProduct = new Product((Math.random() + 1).toString(36).substring(2), Math.floor(Math.random() * maxAmount)+1, Math.floor(Math.random() * maxPrice), ProductType.BuyNow);
    cart.AddProduct(wrongProduct)

    cart.ListProduct()

    console.log(cart.SumOfProductsAmount())
    console.log(cart.SumOfProductsPrices())

    const product = cart.GetProduct(cart.SumOfProducts()-1)

    if(product) cart.DeleteProduct(product);

    cart.ListProduct()
    console.log(cart.SumOfProductsAmount())
    console.log(cart.SumOfProductsPrices())

    if(product) cart.UpdateProduct(cart.SumOfProducts()-1, product);

    cart.ListProduct()
    console.log(cart.SumOfProductsAmount())
    console.log(cart.SumOfProductsPrices())

    if(product) cart.UpdateProduct(cart.SumOfProducts()-1, wrongProduct);

    cart.ListProduct()
    console.log(cart.SumOfProductsAmount())
    console.log(cart.SumOfProductsPrices())
}