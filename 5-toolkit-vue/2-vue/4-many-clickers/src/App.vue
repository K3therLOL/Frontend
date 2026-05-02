<script setup lang="ts">
    import Clicker from "./components/Clicker.vue"
</script>

<template>
    <Clicker
    v-for="n in 100" 
    :key="n"
    />
</template>

<style scoped></style>
