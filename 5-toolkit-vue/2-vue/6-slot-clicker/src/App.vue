<script setup lang="ts">
    import Clicker from "./components/Clicker.vue"
</script>

<template>
    <Clicker :amount="5">
        Нажми меня
    </Clicker>

    <Clicker :amount="10">
        Сюда +10
    </Clicker>
</template>

<style scoped></style>
