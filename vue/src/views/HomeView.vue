<template>
  <h1>buy my stuff</h1>
  <h2>please :)</h2>


  <h2>Products</h2>
  <hr>
  <ProductCard v-for="product in products" :product="product" :key="product.name" @addToCart="addToCart" />
  <p id="end">you've reached the end of the catalogue</p>
  <SideBar v-for="products in cart" :totalItems="totalItems" :totalPrice="totalPrice" />
<!--   <div class="totals">
      <h2>Items in cart: {{ totalItems }}</h2>
      <h2>Cart total: {{ usDollar.format(totalPrice) }}</h2> 
    </div> -->
</template>

<script>
import { products } from '../products.js';
import ProductCard from '../components/ProductCard.vue';
import SideBar from '../components/SideBar.vue'

//https://www.smashingmagazine.com/2020/01/data-components-vue-js/#emitting-custom-events-share-data-child-parent
//https://learnvue.co/articles/vue-emit-guide

export default {
  name: "Home",
  components: {
    ProductCard,
    SideBar

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
      product.quantity++; //increase the qty every time the button is pressed
      this.totalItems++; //for every time the button is pressed, the qty is added to the cart total
      this.totalPrice += product.price; //for every time the button is pressed, the price is added to the cart total
      console.log(this.totalItems, this.totalPrice); //i swear this code works, the console log is a mess but it proves my point 
      this.cart.push(product);
      console.log(this.cart);
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

.products{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
</style>
