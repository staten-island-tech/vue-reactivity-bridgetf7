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
            //find the index of the product to be removed
            const target = update.cart.findIndex((key) => key.name === this.product.name);
            //remove the product from the cart
            //splice(start, deleteCount)
            update.cart.splice(target, 1);
            //update the total items and total price
            update.totalItems -= this.product.quantity;
            update.totalPrice -= (this.product.quantity) * (this.product.price);
        },
    },
};
</script>
  