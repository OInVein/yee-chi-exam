<script setup lang="ts">
import List from './components/List.vue'
</script>

<template>
  <div class="container">
    <div class="demo-title">Type 1 👇</div>
    <List
      :data="[
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
      ]"
    />
    <div class="demo-title">Type 2 👇</div>
    <List
      :data="[
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
      ]"
    />
    <div class="demo-title">Type 3 👇</div>
    <List
      :data="[
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
.demo-title {
  font-size: 1.3em;
  display: flex;
  font-weight: bold;
  padding: 8px 0;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
