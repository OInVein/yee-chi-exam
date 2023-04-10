<script setup lang="ts">
import Type1, { Type1Props } from './Type1.vue'
import Type2, { Type2Props } from './Type2.vue'
import Type3, { Type3Props } from './Type3.vue'

type Item = Type1Props | Type2Props | Type3Props
type Data = Type1Props[] | Type2Props[] | Type3Props[]

defineProps<{ data: Data }>()

const type1Keys: (keyof Type1Props)[] = ['name', 'year', 'class']
const type2Keys: (keyof Type2Props)[] = ['title', 'category', 'rating']
const type3Keys: (keyof Type3Props)[] = ['winner', 'rank']

const isType1 = (item: Item): item is Type1Props => type1Keys.every((el) => el in item)
const isType2 = (item: Item): item is Type2Props => type2Keys.every((el) => el in item)
const isType3 = (item: Item): item is Type3Props => type3Keys.every((el) => el in item)

const getComponent = (item: Item) => {
  if (isType1(item)) return Type1
  if (isType2(item)) return Type2
  if (isType3(item)) return Type3
  return null
}

const getClass = (data: Data) => {
  if (isType1(data[0]) || isType2(data[0])) return 'light'
  return 'dark'
}
</script>

<template>
  <div :class="getClass(data)">
    <h2 class="title" v-if="isType3(data[0])">Top {{ data.length }} Winners</h2>
    <component v-for="(item, index) in data" :key="index" :is="getComponent(item)" :...="item" />
  </div>
</template>

<style scoped lang="scss">
.title {
  color: white;
  text-align: left;
  margin-left: -8px;
}
.container {
  gap: 8px;
  display: flex;
  padding: 16px;
  flex-direction: column;
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
