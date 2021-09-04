<template>
  <el-row>
<!--    <el-button >开户</el-button>-->
<!--    <router-link-->
<!--        to="/information"-->
<!--        tag="el-button">-->
<!--      开户-->
<!--    </router-link>-->
    <el-button @click="openAccount" style="margin-top: 20px">开户</el-button>
  </el-row>


</template>

<script>
export default {
  name: "landing",
  methods:{
    openAccount: function(){
      this.$router.push('/information')
    }

  }



}

</script>

<style scoped>

</style>
