<template>
  <h1>buy my stuff</h1>
  <ProductCard v-for="product in products" :name="product.name" :product="product" />
</template>

<script>
import ProductCard from './components/ProductCard.vue';
export default {
  name: "Products",
  components: {
    ProductCard
  }
}   
</script>

<style>
body {
  background-color: #E0E1DD;
}
</style>

