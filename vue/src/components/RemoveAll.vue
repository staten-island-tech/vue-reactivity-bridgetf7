<template>
    <button @click="removeAll">Remove All</button>
</template>
  
<script>
import { update } from "../update";

export default {
    name: "RemoveAll",
    props: {
        product: Object,
    },
    methods: {
        removeAll() {
            // find the index of the product to be removed
            const target = update.cart.findIndex(
                (key) => key.name === this.product.name
            );
            // remove the product from the cart
            update.cart.splice(target, 1);
            // update the total items and total price
            update.totalItems -= this.product.quantity;
            update.totalPrice -= this.product.quantity * this.product.price;
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
    font-family: "Outfit", sans-serif;
    letter-spacing: 0.05rem;
    text-align: center;
    color: white;
    background-color: black;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
    border-color: transparent;
}
</style>
  