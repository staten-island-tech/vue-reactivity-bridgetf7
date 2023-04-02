<template>
    <button @click="removeOne">Remove One</button>
</template>
  
<script>
import { update } from "../update";
export default {
    name: "RemoveOne",
    props: {
        product: Object,
    },
    methods: {
        removeOne() {
            if (this.product.quantity > 1) {
                // if the product quantity is greater than 1, decrement the qty by 1
                this.product.quantity -= 1;
                update.totalItems -= 1;
                update.totalPrice -= this.product.price;
            } else {
                // remove entire item from cart if the qty is 1, as the product qty will become 0 if you decrement it by 1
                const target = update.cart.findIndex(
                    (key) => key.name === this.product.name
                );
                update.cart.splice(target, 1);
                update.totalItems -= this.product.quantity;
                update.totalPrice -= this.product.quantity * this.product.price;
            }
        }
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

button:hover {
    transform: scale(1.04);
}
</style>
  