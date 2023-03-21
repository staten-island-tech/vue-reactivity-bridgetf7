<script>
import { products } from '../products.js'

export default {
    data() {
        return {
            products,
            cartVisible: false,
            usDollar: new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }),
        }
    },
}
</script>

<template>
    <button @click="cartVisible=!cartVisible">Open Shopping Cart</button>
    <div class="shoppingCart">
        <h2 v-show="cartVisible">Shopping Cart</h2>
        <hr>
        <div class="checkoutCard" v-for="product in products" :key="product.name" v-show="cartVisible">
            <p>{{ product.name }}</p>
            <p>{{ usDollar.format(product.price) }}</p>
            <p>Qty: {{ product.quantity }}</p>
        </div>
    </div>
    <p>Items in Cart: {{ totalItems }}</p>
    <p>Cart total: {{ totalPrice }}</p>
</template>




<style scoped>
.shoppingCart{
    display: flex;
    flex-direction: column;
}



.checkoutCard {
    background-color: var(--lightGray);
    margin: 2rem;
    padding: 1.25rem;
    display: inline-block;
    width: 16rem;
    height: 15rem;
    display: flex;
}
</style>