<script setup lang="ts">
import Card from './Card.vue'

export interface Type3Props {
  winner: string
  rank: number
}

defineProps<Type3Props>()
</script>

<template>
  <!-- <div class="card"> -->
  <Card type3>
    <div>{{ rank }} {{ winner }}</div>
  </Card>
  <!-- </div> -->
</template>
