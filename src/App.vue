<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Hello" msg2="World"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/template">ex1</RouterLink>
        <RouterLink to="/reactivity">exreactivity</RouterLink>
        <RouterLink to="/computed">computed</RouterLink>
        <RouterLink to="/stylebind">Style Binding</RouterLink>
        <RouterLink to="/condition">조건부 렌더링</RouterLink>
        <RouterLink to="/list_render">리스트 렌더링</RouterLink>
        <RouterLink to="/event">이벤트</RouterLink>
        <RouterLink to="/form_bind">form input 핸들링</RouterLink>
        <RouterLink to="/lifecycle">생명주기 함수</RouterLink>
        <RouterLink to="/watch">감시자</RouterLink>
        <RouterLink to="/temp_ref">템플릿 참조</RouterLink>
        <RouterLink to="/comp_basic">컴포넌트 기초</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
