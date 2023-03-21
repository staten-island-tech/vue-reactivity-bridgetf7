<template>
  <main>
    <h1>buy my stuff</h1>
    <h2>please :)</h2>
    <HomeView />
  </main>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
  name: "App",
  components: {
    HomeView
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
</style>

