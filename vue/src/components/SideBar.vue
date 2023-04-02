<template>
  <div class="sidebar">
    <h2>Shopping Cart</h2>
    <hr />
    <div class="cards">
      <div class="checkoutCard" v-for="product in update.cart" :key="product.name">
        <p>{{ product.name }}</p>
        <p>{{ usDollar.format(product.price) }}</p>
        <p>Qty: {{ product.quantity }}</p>
        <div class="buttons">
          <RemoveAll :product="product" @removeAll="removeFromCart(product)">Remove All</RemoveAll>
          <RemoveOne :product="product" @removeOne="removeOne(product)">Remove One</RemoveOne>
        </div>
      </div>
    </div>
    <div class="totals">
      <p>Items in cart: {{ update.totalItems }}</p>
      <p>Cart total: {{ usDollar.format(update.totalPrice) }}</p>
    </div>
  </div>
</template>

<script>
import { products } from "../products.js";
import { update } from "../update";
import RemoveAll from "./RemoveAll.vue";
import RemoveOne from "./RemoveOne.vue";

export default {
  name: "SideBar",
  props: {
    product: Object,
  },
  data() {
    return {
      products,
      update,
      usDollar: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  components: {
    RemoveOne,
    RemoveAll,
  },
  methods: {
    removeFromCart(product) {
      this.$emit("removeFromCart", product);
    },
    removeOne(product) {
      this.$emit("removeOne", product);
    },
  },
};
</script>


<style scoped>
.shoppingCart {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkoutCard {
  background-color: var(--lightGray);
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding: 1rem;
  display: inline-block;
  width: 14rem;
  height: auto;
  display: flex;
  flex-direction: column;
  line-height: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 15%;
  height: 100%;
  background-color: #fffcfc;
  line-height: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-style: normal;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0;
  color: black;
}

hr {
  width: 16rem;
}

.buttons {
  display: flex;
  flex-direction: row;
}

button {
  margin: 0.2rem;
}
</style>