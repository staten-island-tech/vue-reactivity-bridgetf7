<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
};
</script>

<style scoped>
button {
    font-family: 'Playfair Display', serif;
    display: inline-block;
    width: auto;
    height: auto;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    text-align: center;
    color: black;
    font-family: 'Outfit', sans-serif;
}
</style>