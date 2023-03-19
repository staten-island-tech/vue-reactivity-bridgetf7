<script>
import ProductButton from '../components/ProductButton.vue';
import ProductCard from '../components/ProductCard.vue';
export default {
  name: "Button",
  components: { 
    ProductButton,
    ProductCard,
  },
}
</script>

<template>
  <ProductButton>hi</ProductButton>
  <ProductCard />
</template>
