<template>
  <div class="home">
<ProductCart :openCart="openCart" :closeCart="closeCart"/>
<ProductCard />
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import ProductCart from '../components/ProductCart.vue';
export default {
  name: "HomeView",
  components: {
    ProductCard,
    ProductCart
},
}
</script>
