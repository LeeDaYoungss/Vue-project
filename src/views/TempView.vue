<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  }
})
const rawHTML = '<a href="">Link</a>';
const pid = 10;
const isButtonDisabled = true;
const myAttrs = {
  id:'container',
  class:'wrappler'
}
const number = 20;
const ok = false;
const message = '안녕';
const id = 30;
const sayHello = (msg)=>{
  alert(msg);
}
const seen = false;
const items = [
  {id:0, title:'제목1'},
  {id:1, title:'제목2'},
  {id:2, title:'제목3'}
]
let url = 'http://www.abc.com';
let myattr = 'href';

</script>

<template>
  <div class="temp">
    <h1>This is an Template page</h1>
    
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <hr>
      <p>텍스트 보간법: {{ rawHTML }}</p>
      <p>v-html 지시자(directive): <span v-html="rawHTML"></span></p>
    <hr>
    <h4>속성 바인딩</h4>
    <div v-bind:id="pid">프로젝트 id:{{ pid }}</div>
    <div :id="pid">프로젝트 id:{{ pid }}</div>
    <button v-bind:disabled="isButtonDisabled">버튼</button>
    <button :disabled="!isButtonDisabled">버튼</button>
   <div v-bind="myAttrs">여러 속성 바인딩</div>
   <hr>
   <h4>표현식</h4>
   <p>{{ number + 1 }}</p>
   <p>{{ ok ? '예' :'아니오' }}</p>
   <p>{{ message.split('').reverse().join('') }}</p>
   <p v-bind:id="id">{{ id }}</p>
   <p :id="`list-${id}`">{{ `list-${id}` }}</p>
   <p v-on:click="sayHello('안녕')">title</p>
   <p @click="sayHello('안녕')">title</p>
   <p v-if="seen">보인다</p>
   <ul v-for="item in items" :key="item.id">
    <li>{{ item.title }}</li>
   </ul>
   <h3>동적인 인자</h3>
   <p>
    <a :[myattr]="url">abc</a>
   </p>
   <form action="" @submit.prevent="sayHello('막기')">
     <input type="text">
     <button>전송</button>
   </form>  
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
