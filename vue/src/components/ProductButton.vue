<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ProductButton",
}
</script>

<style scoped>
button {
    display: inline-block;
    width: auto;
    height: auto;
    font-size: 1rem;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.05rem;
    text-align: center;
    color: white;
    background-color: black;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
    border-color: transparent;
}

:hover {
    transform: scale(1.04);
}
</style>

