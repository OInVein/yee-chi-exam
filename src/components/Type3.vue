<script setup lang="ts">
export interface Type3Props {
  winner: string
  rank: number
}

defineProps<Type3Props>()
</script>

<template>
  <div class="card">
    <div>{{ rank }} {{ winner }}</div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 4px 16px;
  gap: 8px;
  width: 600px;
  background-color: white;
  color: black;
  border-radius: 8px;
  font-weight: 500;
}
</style>
