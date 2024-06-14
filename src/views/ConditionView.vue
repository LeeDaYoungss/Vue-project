<script setup>
  import { ref, reactive } from 'vue';

  const awesome = ref({value:false});
  const type = ref('D');
  const page = ref(true);

  const convert = () => {
    awesome.value = !awesome.value
  };
  
</script>

<template>
  <button @click="page=!page">페이지 전환</button>
  <div class="condition">
    <h1>This is a Condition Rendering</h1>
    <button @click="convert">전환</button>
    <p v-if="awesome">vue는 멋집니다!</p>
    <p v-else>아닌가요?</p>
    <hr>
    <p v-if="type === 'A'">A</p>
    <p v-else-if="type === 'B'">B</p>
    <p v-else-if="type === 'C'">C</p>
    <!-- <p v-else-if="type === 'D'">D</p> -->
    <p v-else>A,B,C도 아님</p>
  </div>
  <template v-if="page">
    <h2>페이지 1</h2>
    <p>페이지 1의 설명...</p>
    <div v-show="true">안녕하세요</div>
  </template>
  <template v-else>
    <h2>페이지 2</h2>
    <p>페이지 2의 설명...</p>
    <div v-show="false">안녕하세요</div>
  </template>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
