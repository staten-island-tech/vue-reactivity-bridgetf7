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

<style>
h1 {
  font-size: 3rem;
  text-align: center;
}

h2{
  font-size: 1.5rem;
  text-align: center;
}
body {
  background-color: #E0E1DD;
}

</style>

