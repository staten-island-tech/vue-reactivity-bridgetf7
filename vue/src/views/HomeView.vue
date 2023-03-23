<template>
  <div class="home">

    <div class="container">
    <h1>buy my stuff</h1>
    <h2>please :)</h2>
      <ProductCard />
      <SideBar />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import SideBar from '../components/sideBar.vue';
export default {
  name: "HomeView",
  components: {
    ProductCard,
    SideBar
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
</style>
