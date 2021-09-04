<template>
  <div class="home">
    <openAccountButton></openAccountButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/personalInfo.vue'
import openAccountButton from '@/components/openaccount'

export default {
  name: 'Home',
  components: {
    openAccountButton
  }
}
</script>
