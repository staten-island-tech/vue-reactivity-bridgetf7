<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    products: [
      {
        name: "Erica wishes she was this chair and will think of another name",
        type: "chair",
        price: 450,
        img: "https://unsplash.com/photos/UIcBEy5TDTA"
      },
      {
        name: "Erica thought the human was wall decor",
        type: "chair",
        price: 800,
        img: "https://unsplash.com/photos/ej3UoXYMaRI"
      },
      {
        name: "I will name it later—Eroca",
        type: "dining table",
        price: 1600,
        img: "https://unsplash.com/photos/h7HnSTwc7y0"
      },
    ]
  };
}
//https://medium.com/swlh/filtering-sorting-and-searching-in-arrays-with-vue-js-f60951c040fc
</script>

<template>
  <h1>buy my stuff :)</h1>
  <img alt="Vue logo" class="logo" src="@/icons/shopping-cart.svg" width="125" height="125" />
  <div class="products"></div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
