<script setup>
  import { onMounted, onBeforeMount, ref, onBeforeUpdate, onUpdated } from 'vue';
  const count = ref(0);

  onMounted(() => {
    console.log(`컴포넌트가 마운트 됐습니다.`)
  });
  onBeforeMount(() => {
    console.log(`마운트 전 시점이다.`)
  });
  onBeforeUpdate(() => {
    console.log(`업데이트 전입니다.`)
  });
  onUpdated(() => {
  console.log(`업데이트 완료입니다.`)
});
</script>

<template>
  {{ console.log ('템블릿 컴파일 시작') }}
  <div class="lifecycle">
    <h1>This is an LifeCycle page</h1>
    <button @click="count++">추가</button>
    <p>{{ count }}</p>
  </div>
  {{ console.log ('템블릿 컴파일 완료') }}
</template>

<style>
@media (min-width: 1024px) {
  .lifecycle {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
