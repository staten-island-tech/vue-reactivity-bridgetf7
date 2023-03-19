<template>
  <h1>buy my stuff</h1>
  <ProductCard />
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import ProductButton from './components/ProductButton.vue';
export default {
  name: "App",
  components: {
    ProductButton,
    ProductCard
  },
}
</script>

<style>
h1 {
  font-size: 3rem;
  text-align: center;
}

body {
  background-color: #E0E1DD;
}
</style>

