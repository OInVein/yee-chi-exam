<script setup lang="ts">
import List from './components/List.vue'
</script>

<template>
  <div class="container">
    <List
      :data="[
        // type1
        {
          name: 'Anna',
          year: 10,
          class: 'A',
        },
        {
          name: 'Mark',
          year: 10,
          class: 'M',
        },

        // type2
        {
          title: 'Javascrit Info',
          category: 'book',
          rating: 10,
        },
        {
          title: 'Fantasy',
          category: 'movie',
          rating: 5,
        },

        // type3
        {
          winner: 'Amy',
          rank: 1,
        },
        {
          winner: 'Bob',
          rank: 2,
        },
        {
          winner: 'Jack',
          rank: 3,
        },
      ]"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
