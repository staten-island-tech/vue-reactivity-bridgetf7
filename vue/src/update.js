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
      product.quantity = 1;
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
  removeFromCart(product) {
    //finds the index of the product that needs to be removed (targeted product)
    const target = this.cart.findIndex((key) => key.name === product.name);
    console.log(target);
    //splice(start, deleteCount), this line will erase it from the array and visually the cart
    this.cart.splice(target, 1)
    this.totalItems -= (product.quantity);
    this.totalPrice -= (product.quantity) * (product.price)
  },
  removeOne(product) {
    if (product.quantity > 1) {
      // if the product quantity is greater than 1, decrement the qty by 1
      product.quantity -= 1;
      this.totalItems -= 1;
      this.totalPrice -= product.price;
    } else {
      //remove entire item from cart, as the product qty will become 0
      this.removeFromCart(product);
    }
  }
});
