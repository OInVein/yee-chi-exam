<script setup lang="ts">
import Card from './Card.vue'

export interface Type2Props {
  title: string
  category: string
  rating: number
}

defineProps<Type2Props>()
</script>

<template>
  <Card>
    <div>Title: {{ title }}</div>
    <div>Category: {{ category }} | {{ rating }} likes</div>
  </Card>
</template>
