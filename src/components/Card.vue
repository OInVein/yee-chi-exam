<template>
  <div class="card"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped>
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
