<script setup lang="ts">
withDefaults(defineProps<{ type3: boolean }>(), {
  type3: false,
})
</script>

<template>
  <div class="card" :class="{ type3 }"><slot></slot></div>
</template>

<style scoped>
.type3 {
  padding: 4px 16px;
  font-weight: 500;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  gap: 8px;
  width: 600px;
  background-color: white;
  color: black;
  border-radius: 8px;
}
</style>
