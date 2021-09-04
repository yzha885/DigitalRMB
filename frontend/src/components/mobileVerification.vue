<template>
  <div class="information">
    <el-form ref="form" :model="form" label-width="80px">

      <!--      运营机构-->
      <el-form-item label="运营机构">
        <el-select v-model="form.region" placeholder="请选择数字人民币运营机构">
          <el-option label="中国工商银行" value="1"></el-option>
          <el-option label="中国农业银行" value="2"></el-option>
          <el-option label="中国银行" value="3"></el-option>
          <el-option label="中国建设银行" value="4"></el-option>
          <el-option label="交通银行" value="5"></el-option>
          <el-option label="中国邮政储蓄银行" value="6"></el-option>
          <el-option label="中信银行" value="7"></el-option>
          <el-option label="中国广大银行" value="8"></el-option>
          <el-option label="招商银行" value="9"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <div style="margin-top: 15px;">
          <el-input v-model="input2" placeholder="请输入手机号">
            <template slot="append">获取验证码</template>
          </el-input>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>




    </el-form>
  </div>


</template>

<script>


export default {
  name: 'form',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>
