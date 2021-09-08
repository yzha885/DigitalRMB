<template>
  <div id="home">
    <el-image
        fit="fill"
        style="width: 100vw; height: 100vh; z-index: -1; position: absolute"
        :src="require('../assets/background.jpg')"></el-image>
    <div>
      <div class="flex_between" style="padding: 20vw 30vw 0 30vw">
        <div>
          <el-image
              :src="require('../assets/rmb.png')"
              style="width: 15vw; height: 15vw;"
              fit="contain"></el-image>
        </div>
        <span style="font-weight: 900; font-size: 20px">E-CNY</span>
      </div>
      <div class="flex_center" style="margin-top: 60vh">
        <el-button round @click="openAccount" type="danger" >开户</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/personalInfo.vue'
// import openAccountButton from '@/components/openaccount'

export default {
  name: 'Home',
  components: {

    },
  methods: {
    openAccount: function () {
      this.$router.push('/information')

    }
  }
}
</script>

<style>
.flex_center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex_between{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

