<template>
    <button @click="addToCart">Add to Cart</button>
</template>
  
<script>
import { update } from "../update";

export default {
    name: "AddButton",
    props: {
        product: Object,
    },
    methods: {
        addToCart() {
            //check if product already exists in cart; check if the name is the same (would probably be more efficient with IDs in real applications)
            const productExists = update.cart.find((existing) => existing.name === this.product.name);
            
            if (productExists) {
                //if product exists, increment its quantity; this will show up in the cart array
                productExists.quantity++;
            } else {
                //if product doesn't already exist, push it to the cart with a quantity of 1
                //this pushes a whole array item inside the cart thingy
                update.cart.push({name: this.product.name, price: this.product.price, quantity: 1});

            }

            //update total items and total price whenever the "add to cart" button is pressed
            update.totalItems++;
            update.totalPrice += this.product.price;

            //console logs
            console.log("Shopping Cart:", update.cart);
            console.log("Total Items:", update.totalItems, "\nTotal Price:", update.totalPrice);
        },
    },
};
</script>
  

<style scoped>
button {
    display: inline-block;
    width: auto;
    height: auto;
    font-size: 1rem;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.05rem;
    text-align: center;
    color: white;
    background-color: black;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
    border-color: transparent;
}

button:hover {
    transform: scale(1.04);
}
</style>


