<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('질문에는 보통 물음표가 포함됩니다. ;-)')
const loading = ref(false)

// watch는 ref에 직접 작동합니다
watch(question, async (newQuestion, oldQuestion) => {
  console.log(newQuestion);

  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = '생각 중...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = '오류! API에 도달할 수 없습니다. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <div class="watch">
    <h1>This is a Watches page</h1>
    <p>예/아니오 질문:</p>
    <input type="text" v-model="question">
    <p>
      {{ answer }}
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .watch {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
