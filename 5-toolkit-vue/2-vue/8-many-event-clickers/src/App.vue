<script setup lang="ts">
    import Clicker from "./components/Clicker.vue"

    const showAlert = (n: number) => {
        alert(`Clicker ${n} clicked!`);
    };
</script>

<template>
    <Clicker
    v-for="n in 100" 
    :key="n"
    :id="n"
    @button-clicked="showAlert(n)"
    />
</template>

<style scoped></style>
