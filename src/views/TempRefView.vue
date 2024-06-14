<script setup>
  import { ref, onMounted } from 'vue';

  const input = ref(null)
  const list = ref([1,2,3]);
  const itemRefs = ref([])


  onMounted(()=>{
    // let target = document.querySelector('#target');
    // target.focus();
    
    input.value.focus();
    console.log(itemRefs.value)
  })
</script>

<template>
  <div class="temp_ref">
    <h1>This is an Template Ref page</h1>
    <input type="text" ref="input">
    <hr>
    <ul>
      <li v-for="item in list" :key="item" ref="itemRefs">{{ item }}</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .temp_ref {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
