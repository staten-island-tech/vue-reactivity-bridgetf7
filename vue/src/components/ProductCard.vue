<template>
  <div class="productCard">
    <img :src="product.img" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p class="productType">{{ product.type }}</p>
    <p>{{ usDollar.format(product.price) }}</p>
    <AddButton :product="product" @addToCart="addToCart">Add to Cart</AddButton>
  </div>
</template>

<script>
import { update } from "../update";
import AddButton from './AddButton.vue';

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  data() {
    return {
      usDollar: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    }
  },
  components: {
    AddButton
  },

  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);
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


.productType {
  color: black;
  text-transform: capitalize;
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
