import { Product } from "../features/productSlice";

export const calculateTotalOfProducts = (products: Product[])=>{
    // This tells typescript that total is always a number
    // let total: number = 0;
    let total: number= 0;
    products.forEach((product)=>{
        total += product.price
    })
    return parseFloat(total.toFixed(2));
}

export const reverseStringToUpperCase=(string:string)=>{
    return string.split("").reverse().join("").toUpperCase();
}
const result = reverseStringToUpperCase('Hello');
console.log(result); 














