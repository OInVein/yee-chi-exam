<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ mode: 'dark' | 'light' }>()
const dark = computed(() => props.mode === 'dark')
const light = computed(() => props.mode === 'light')
</script>

<template>
  <div :class="{ dark, light }"><slot></slot></div>
</template>

<style scoped lang="scss">
.container {
  gap: 8px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  transition: all 0.3s;
}

.container:hover {
  box-shadow: 0 0 20px 5px #008e89;
}

.light {
  @extend .container;
  color: black;
  background-color: #ebebeb;
}

.dark {
  @extend .container;
  background-color: #1e1e1e;
}
</style>
