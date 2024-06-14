<script setup>
import { ref } from 'vue'
defineProps(['title'])

const count = ref(0)
const postFontSize = ref(1)
const enlargeTextSelf = () =>{
  postFontSize.value += 0.1
}
const emits = defineEmits(['enlarge-text','smaller-text'])
const enLargeAll = () =>{
  emits('enlarge-text')
}
const smallerAll = () =>{
  emits('smaller-text')
}
</script>

<template> 
  <div :style="{ fontSize: postFontSize + 'em' }">
  <h2>버튼 카운트</h2>
  <h3>{{ title }}</h3>
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
  <button @click="enlargeTextSelf">확대</button>
  <!-- <button @click="$emit('enlarge-text')">전체 확대</button> -->
  <button @click="enLargeAll">전체 확대</button>
  <button @click="smallerAll">전체 축소</button>
  </div>
</template>