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
    <button @click="cartVisible = !cartVisible">Open Shopping Cart</button>
    <h2 v-show="cartVisible">Shopping Cart</h2>
    <div class="shoppingCart" v-show="cartVisible">
<div class="cards">
        <div class="checkoutCard" v-for="product in products" :key="product.name">
            <p>{{ product.name }}</p>
            <p>{{ usDollar.format(product.price) }}</p>
            <p>Qty: {{ product.quantity }}</p>
        </div>
</div>
        <div class="totals">
            <p>Items in Cart: {{ totalItems }}</p>
            <p>Cart total: {{ totalPrice }}</p>
        </div>

    </div>

</template>




<style scoped>
.shoppingCart {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.cards {
    display: flex;
    flex-direction: row;
}
.checkoutCard {
    background-color: var(--lightGray);
    margin: 2rem;
    padding: 1.25rem;
    display: inline-block;
    width: 16rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    line-height: 0.4rem;
}
</style>