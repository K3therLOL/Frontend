<script setup lang="ts">
    import { ref } from 'vue'
    const count = ref(0)
    const props = defineProps({
        title: String,
        amount: {
            type: Number,
            default: 1
        },
        id: {
            type: Number,
            required: true
        }
    });

    const emit = defineEmits<{
        (e: "button-clicked", payload: { count: number, amount: number }): void
    }>();

    const addPoints = () => {
        count.value += props.amount;
        emit("button-clicked", { count: count.value, amount: props.amount, id: props.id });
    };
</script>

<template>
    <button @click="addPoints">Count is: {{ count }}</button>
</template>

<style scoped></style>
