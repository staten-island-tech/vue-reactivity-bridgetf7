<script>
import { products } from '../products.js'

export default {
    data() {
        return {
            products,
            openCart: true,
            usDollar: new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }),
        }
    },
}
</script>

<template>
    <h2>Shopping Cart</h2>
    <div class="checkoutCard" v-for="product in products" :key="product.name" v-show="openCart">
        <p>{{ product.name }}</p>
        <p>{{ usDollar.format(product.price) }}</p>
        <p>Qty: {{ product.quantity }}</p>
    </div>
    <p>Items in Cart: {{ totalItems }}</p>
    <p>Cart total: {{ totalPrice }}</p>
</template>



<style scoped>
h2 {
    font-size: 2.5rem;
    text-align: center;
}

.checkoutCard {
    background-color: var(--lightGray);
    margin: 2rem;
    padding: 1.25rem;
    display: inline-block;
    width: 16rem;
    height: 15rem;
}
</style>