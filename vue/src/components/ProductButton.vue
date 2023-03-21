<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
import { products } from "../products";
export default {
    name: "Button",
    data() {
        return {
            products
        };
    },

}
</script>

<style scoped>
button {
    display: inline-block;
    width: auto;
    height: auto;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    text-align: center;
    color: black;
    font-family: 'Outfit', sans-serif;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
}
</style>
