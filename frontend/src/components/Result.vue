<template>
  <div class="card" style="margin-top: 10vh">
    <p>信息提交成功</p>
    <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
      <div>
        <i class="checkmark">✓</i>
      </div>
    </div>
    <el-button @click="addBankCard">添加借记卡</el-button>

  </div>

</template>
<style>
*{
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
  /*padding: 40px 0;*/
  background: #EBF0F5;
}
p {
  color: #404F5E;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size:20px;
  margin: 0;
}
i {
  color: #9ABC66;
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
.card {
  line-height: 100px!important;
  background: white;
  padding: 20px 40px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #C8D0D8;
  display: inline-block;
  margin: 0 auto;
}

</style>

<script>
export default {
  name: "Result",
  components: {

  },
  methods: {
    addBankCard: function () {
      this.$router.push('/binding')

    }
  }
}
</script>

<style scoped>

</style>
