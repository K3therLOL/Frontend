<script setup lang="ts">
    import Clicker from "./components/Clicker.vue"
    const handleClick = (payload: { count: number, amount: number }) => {
        console.log(`Button clicked! New count: ${payload.count}, added: ${payload.amount}`)
    };
</script>

<template> 
    <Clicker @button-clicked="handleClick" />
</template>

<style scoped></style>
