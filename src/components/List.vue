<script setup lang="ts">
import Title from './Title.vue'
import Type1, { Type1Props } from './Type1.vue'
import Type2, { Type2Props } from './Type2.vue'
import Type3, { Type3Props } from './Type3.vue'
import ListContainer from './ListContainer.vue'

type Item = Type1Props | Type2Props | Type3Props
type Data = Type1Props[] | Type2Props[] | Type3Props[]

defineProps<{ data: Data }>()

const isType1 = (item: Item) => 'name' in item
const isType2 = (item: Item) => 'title' in item
const isType3 = (item: Item) => 'winner' in item

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
  <ListContainer :mode="getClass(data)">
    <Title v-if="isType3(data[0])">Top {{ data.length }} Winners</Title>
    <component v-for="(item, index) in data" :key="index" :is="getComponent(item)" :...="item" />
  </ListContainer>
</template>
