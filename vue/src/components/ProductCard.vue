<template>
  <h2>Products</h2>
  <div class="productCard" v-for="product in products" :key="product.name">
    <h3>{{ product.name }}</h3>
    <img :src="product.img" />
    <p class="productType">{{ product.type }}</p>
    <p>{{ usDollar.format(product.price) }}</p>
    <ProductButton @click="addToCart(product)">Add to Cart</ProductButton>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue';
import { products } from '../products.js';

export default {
  name: "ProductCard",
  props: {
    name: String,
    type: String,
    price: Number,
    img: String,
    quantity: Number
  },
  components: {
    ProductButton,
  },
  data() {
    return {
      products,
      usDollar: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      cartItems: 0,
    }
  },
  methods: {
    addToCart(product) {
      product.quantity++;
      this.cartItems++;
    },
  },
}
</script>

<style scoped>
.productCard {
  font-family: 'Playfair Display', serif;
  background-color: var(--lightGray);
  margin: 2rem;
  padding: 1.25rem;
  display: inline-block;
  width: 16rem;
  height: 25rem;
}

h2 {
  font-size: 2.5rem;
  font-family: 'Outfit', sans-serif;
  color: black;
  text-transform: capitalize;
  text-align: center;
}

h3 {
  font-size: 2rem;
  font-family: 'Outfit', sans-serif;
}

p {
  font-family: 'Outfit', sans-serif;
}

.productType {
  color: black;
  text-transform: capitalize;
}

.cart {
  margin-top: 2rem;
  font-family: 'Outfit', sans-serif;
}
</style>
