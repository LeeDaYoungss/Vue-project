<script setup>
import { ref, computed } from 'vue';

  const parentLang = ref('Web');
  const items = ref([
    {title:'html', desc:'html ...', complete:true},
    {title:'css', desc:'css ...', complete:true},
    {title:'javascript', desc:'javascript ...', complete:false},
    ]);
    const myObj = ref({
      title:'html',
      desc:'html ...',
      level:'초급'
    })
    const completeItems = computed(() => {
      return items.value.filter((item) => item.complete)
    })
</script>
<template>
  <div class="list">
    <h1>This is an List Rendering page</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ index+': '+item.title }}</li>
    </ul>
    <ul>
      <!-- (내용, property명, index값) -->
      <li v-for="(item, prop, index) in myObj" :key="index">{{ index+ ' '+prop+': '+item }}</li>
    </ul>
    <hr>
    <template v-for="(item, index) in items" :key="index">
      <h2>{{ item.title }}</h2>
    </template>
  </div>
  <hr>
  <template v-if="true">
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ul>
  </template>
  <hr>
  <ul>
    <!-- <li v-for="(item, index) in items" :key="index">{{ item.title }}</li> -->
    <li v-for="(item, index) in completeItems" :key="index">{{ item.title }}</li>
  </ul>
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
