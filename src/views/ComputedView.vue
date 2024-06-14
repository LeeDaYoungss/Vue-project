<script setup>
  /*
  import { reactive } from 'vue';

  const author = reactive({
    name :'lee',
    books:[
      'figma',
      'publishing',
      'web design'
    ]
  });
  */

  import { ref, reactive, computed } from 'vue'

  const author = reactive({
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })

  // 계산된 ref
  const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
  })

  const firstName = ref('John')
  const lastName = ref('Doe')

  const fullName = computed({
    // getter
    get() {
      return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
      // 참고: 분해 할당 문법을 사용함.
      [firstName.value, lastName.value] = newValue.split(' ')
    }
  })

</script>
<template>
  <div class="computed">
    <h1>This is an Computed Properties</h1>
    <p>책을 가지고 있다.</p>
    <span>{{ publishedBooksMessage }}</span>
    <hr>
    {{ firstName }}
    <hr>
    {{ fullName='lee dayoung' }} //set함수 작동
    {{ fullName }} //get함수 작동
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
