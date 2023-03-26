<template>

  <h1>buy my stuff</h1>
  <h2>please :)</h2>


  <h2>Products</h2>
  <hr>

  <div class="main">
    <ProductCard v-for="product in products" :product="product" :key="product.name" @addToCart="addToCart" />
    <p id="end">you've reached the end of the catalogue</p>
  </div>

  <SideBar />

</template>

<script>
import { products } from '../products.js';
import ProductCard from '../components/ProductCard.vue';
import SideBar from '../components/SideBar.vue';
import { update } from '../update';

export default {
  name: "Home",
  components: {
    ProductCard,
    SideBar,
    update,
  },
  data() {
    return {
      products,
      totalItems: 0,
      totalPrice: 0,
      cart: [],
      usDollar: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    }
  },
  methods: {
    addToCart(product) {
    },
    removeFromCart(product){
    },
  },
}
</script>

<style scoped>
h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.35rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  font-style: italic;
}

.container {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

#end {
  text-align: center;
  opacity: 80%;
}

hr {
  width: 85%;
}

.main {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
