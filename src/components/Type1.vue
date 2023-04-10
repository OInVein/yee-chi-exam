<script setup lang="ts">
import Card from './Card.vue'

export interface Type1Props {
  name: string
  year: number
  class: string
}

defineProps<Type1Props>()
</script>

<template>
  <Card>
    <div>Student: {{ name }}</div>
    <div>Year: {{ year }}, Room: {{ $props['class'] }}</div>
  </Card>
</template>
