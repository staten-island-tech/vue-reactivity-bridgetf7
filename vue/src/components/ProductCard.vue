<template>
  <div>
    <div class="productCard" v-for="product in products" :key="product.name">
      <h2>{{ product.name }}</h2>
      <img :src="product.img" />
      <p class="productType">{{ product.type }}</p>
      <p>{{ usDollar.format(product.price) }}</p>
      <ProductButton @click="cart(product)">Add to Cart</ProductButton>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue';

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
      products: [
        {
          name: "chair",
          type: "chair",
          price: 450,
          img: "",
          quantity: 0
        },
        {
          name: "couch",
          type: "chair",
          price: 800,
          img: "",
          quantity: 0
        },
        {
          name: "table",
          type: "dining table",
          price: 1600,
          img: "",
          quantity: 0
        },
        {
          name: "shelf",
          type: "storage",
          price: 175,
          img: "",
          quantity: 0
        }
      ],
      //formats prices into US dollars
      usDollar: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    }
  },
  methods: {
    cart(product) {
      product.quantity++;
      console.log(product.name,product.quantity,product.price);
    }
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
}

h2 {
  font-size: 1.5rem;
  font-family: 'Outfit', sans-serif;
  color: black;
  text-transform: capitalize;
}

p {
  font-family: 'Outfit', sans-serif;
  color: var(--slateBlue);
}

.productType {
  color: black;
  text-transform: capitalize;
}
</style>
