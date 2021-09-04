<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <openAccountButton></openAccountButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/form.vue'
import openAccountButton from '@/components/openaccount'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    openAccountButton
  }
}
</script>
