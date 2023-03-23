<template>
  <h2>Products</h2>
  <hr>
  <div class="products">
    <div class="productCard" v-for="product in products" :key="product.name">
      <img :src="product.img" />
      <h3>{{ product.name }}</h3>
      <p class="productType">{{ product.type }}</p>
      <p>{{ usDollar.format(product.price) }}</p>
      <ProductButton @click="addToCart(product)">Add to Cart</ProductButton>
    </div>
  </div>
  <p id="end">you've reached the end of the catalogue</p>
</template>

<script>
import ProductButton from './ProductButton.vue';
import { products } from '../products.js';

//https://www.smashingmagazine.com/2020/01/data-components-vue-js/#emitting-custom-events-share-data-child-parent
//https://learnvue.co/articles/vue-emit-guide

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
template {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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

.products {
  width: 80%;
  display: flex;
  padding: 2rem;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.productType {
  color: black;
  text-transform: capitalize;
}

#end {
  text-align: center;
  opacity: 80%;
}

hr {
  display: block;
  width: 80%;
  background-color: black;
  height: 0.02rem;
}

h2 {
  line-height: 0;
}
</style>
