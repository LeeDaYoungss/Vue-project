<script setup>
  import { ref } from 'vue';

  // const isActive = ref(true)
  // const hasError = ref(true)
  
  const classObj = {
    active:true,
    'text-danger':false
  }
</script>

<template>
  <div class="about">
    <h1>This is a Style Binding</h1>
    <div :class="classObj">스타일 바인딩</div>
  </div>
</template>

<style>
.active {
  text-decoration: underline;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
