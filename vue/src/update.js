import { reactive } from 'vue'
import { products } from './products';

export const update = reactive({
  totalItems: 0, //total items is set to 0 by default
  totalPrice: 0, //total price of all items is set to 0 by default
  cart: [],
  addToCart(product) {
    //check if product already exists in cart; check if the name is the same (would probably be more efficient with IDs in real applications)
    const productExists = this.cart.find((existing) => existing.name === product.name);
    if (productExists) {
      //if product exists, increment its quantity; this will show up in the cart array
      productExists.quantity++;
    } else {
      //if product doesn't already exist, push it to thecart with a quantity of 1
      product.quantity=1;
      this.cart.push(product);
    } 

    //update total items and total price whenever the "add to cart" button is pressed
    this.totalItems++;
    this.totalPrice += product.price;

    //console logs
    console.log("Products:", products);
    console.log("Shopping Cart:", update.cart);
    console.log("Total Items:", this.totalItems, "\nTotal Price:", this.totalPrice);
  },
});
