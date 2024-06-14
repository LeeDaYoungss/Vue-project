<script setup>
/* 방법1
  import { ref, nextTick } from 'vue';
  //nextTick, 화면(dom)이 완료된후 할일

  const count = ref(0);
  console.log(count);
  count.value++;
  console.log(count.value);

  const increment = async ()=>{
    count.value++;
    //업데이트 전
    console.log(document.querySelector('#counter').textContent);//1
    //업데이트 후
    await nextTick();
    console.log(document.querySelector('#counter').textContent);//2
  }

  // async function  increment(){
  //   count.value++;
  // }
  */

  // 방법2
  import {reactive} from 'vue';
  const state = reactive({count:0});
  console.log(state);
  const increment = ()=>{
    state.count++;
    console.log(state);
  }

</script>

<template>
  <div class="react">
    <h1>This is an reactivity page</h1>
    <button @click="increment">+</button>
    <p id="counter">
      {{ state.count }}
    </p>
  </div>
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
