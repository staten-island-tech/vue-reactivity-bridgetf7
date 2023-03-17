<script>
export default {
  data() {
    return {
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
        }
      ]
    }
  }
}
</script>
  

<template>
  <div>
    <div class="products">
      <h2>{{ products.name }}</h2>
      <img :src="products.image" />
      <p>{{ products.description }}</p>
      <p>{{ products.price }}</p>
    </div>
  </div>
</template>
  
<style></style>