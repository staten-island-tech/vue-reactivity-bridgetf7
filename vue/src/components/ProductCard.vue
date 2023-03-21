<template>
  <h2>Products</h2>
  <hr>
  <div class="productCard" v-for="product in products" :key="product.name">  
    <img :src="product.img" />
    <h3>{{ product.name }}</h3>
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
      totalItems: 0,
      totalPrice: 0,
    }
  },
  methods: {
    addToCart(product) {
      product.quantity++; //increase the qty every time the button is pressed
      this.totalItems++; //for every time the button is pressed, the qty is added to the cart total
      this.totalPrice += product.price; //for every time the button is pressed, the price is added to the cart total
      console.log(this.totalItems, this.totalPrice); //i swear this code works, the console log is a mess but it proves my point 
    },
  },
}
</script>

<style scoped>
.productCard {
  font-family: 'Cormorant Garamond', serif;
  background-color: var(--lightGray);
  margin: 1rem;
  padding: 1.25rem;
  display: inline-block;
  width: 16rem;
  height: 25rem;
  line-height: 0.5rem;
}

img {
  width: 16rem;
}

.productType {
  color: black;
  text-transform: capitalize;
}
</style>
