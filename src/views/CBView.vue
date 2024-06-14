<script setup>
import { ref } from 'vue';
import BCView from './BCView.vue';
const count = ref(0)

const titles = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재미있는 이유' }
])
const postFontSize = ref(1)
const enlargeTextAll = () =>{
  postFontSize.value += 0.1
}
const smallerTextAll = () =>{
  postFontSize.value -= 0.1
}
</script>

<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <h2>컴포넌트 기초</h2>
    <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
    <hr>
    <BCView 
      v-for="title in titles" 
      :key="title.id" 
      :title="title.title" 
      @enlarge-text="enlargeTextAll"
      @smaller-text="smallerTextAll"
    />
  </div>
  
</template>