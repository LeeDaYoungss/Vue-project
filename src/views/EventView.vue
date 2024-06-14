<script setup>
import { ref } from 'vue';

  const count = ref(0);

  const name = ref('Vue.js')

function greet(event) {
  alert(`안녕 ${name.value}!`)
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    alert(event.target.tagName)
  }
}

</script>
<template>
  <div class="event">
    <h1>This is an Event page</h1>
    <!-- <button v-on:click="count++">추가</button> -->
    <button @click="count++">추가</button>
    <p>{{ count }}</p>
    <hr>
    <!-- `greet`는 위에서 정의한 메서드의 이름입니다. -->
    <button @click="greet">환영하기 1</button>
    <!-- <button @click="greet($event)">환영하기 2</button> -->
    <hr>
    <!-- 클릭 이벤트 전파가 중지됩니다. -->
    <div @click="greet('클릭')">
      <span @click.stop="count++">버튼</span>
    </div>
    <a @click.prevent="count++">링크2</a>

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="count++">
      <input type="text">
      <button>버튼</button>
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat"></a>

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent></form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click.self="count++">
      <p @click="greet('클릭')">클릭</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .event {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
