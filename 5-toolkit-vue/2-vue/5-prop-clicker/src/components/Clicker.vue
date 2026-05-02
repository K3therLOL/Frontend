<script setup lang="ts">
    import { ref } from 'vue'
    const count = ref(0)
    const props = defineProps({
        title: String,
        amount: {
            type: Number,
            default: 1
        }
    });

    const addPoints = () => {
        count.value += props.amount
    }
</script>

<template>
    <button @click="addPoints">Count is: {{ count }}</button>
</template>

<style scoped></style>
