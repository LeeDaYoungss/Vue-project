<script setup>
import { ref } from 'vue';

  const message = ref('');
  const checked = ref(false);
  const checkedNames = ref([])
  const selected = ref('1')

const options = ref([
  { text: '하나', value: '1' },
  { text: '둘', value: '2' },
  { text: '셋', value: '3' }
])


</script>
<template>
  <div class="form_bind">
    <h1>This is an Form Bind page</h1>
    <input type="text" :value="message" @input="ev=>message=ev.target.value">
    <!-- <input v-model="message"> 한국어, 중국어, 일어는 실시간 반영X -->
    <textarea v-model="message"></textarea>
    <p style="white-space: pre-inline;">
      {{ message }}
    </p>
    <hr>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <hr>
    <div>체크된 이름: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
      <label for="jack">젝</label>

      <input type="checkbox" id="john" value="존" v-model="checkedNames">
      <label for="john">존</label>

      <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
      <label for="mike">마이크</label>
      <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
  </option>
</select>
<div>선택됨: {{ selected }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .form_bind {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
