<template>
  <div class="sidebar">
    <h2>Shopping Cart</h2>
    <hr>
<!--     <div class="cards">
      <div class="checkoutCard" v-for="product in products" :key="product.name">
        <p>{{ product.name }}</p>
        <p>{{ usDollar.format(product.price) }}</p>
        <p>Qty: {{ product.quantity }}</p>
      </div>
    </div> -->
    <div class="totals">
      <p>Items in Cart: {{ totalItems }}</p>
      <p>Cart total: {{ totalPrice }}</p>
    </div>

  </div>
</template>

<script>
import { products } from '../products.js'


export default {
  name: "SideBar",
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

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 15%;
  height: 100%;
  background-color: #fffcfc;
  line-height: 1rem;
  padding: 1rem;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-style: normal;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0rem;
  text-align: center;
  color: black;
}

hr {
  width: 16rem;
}
</style>