<template>
  <div class="information">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <!--      运营机构-->
      <el-form-item label="运营机构" >
        <el-select v-model="ruleForm.rmbOperatingAngency" placeholder="请选择数字人民币运营机构" prop="rmbOperatingAngency">
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

      <el-form-item label="手机号码" prop="mobileNumber">
          <el-input v-model="ruleForm.mobileNumber" placeholder="">
              <el-button slot="append"  >获取验证码</el-button>
          </el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verificationCode">
        <el-input v-model="ruleForm.verificationCode" placeholder="">

        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      ruleForm: {
        rmbOperatingAngency: '',
        mobileNumber: '',
        verificationCode: '',
      },
      rules: {
        rmbOperatingAngency: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        mobileNumber: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { min: 11, max: 11, message: '请输入正确长度的手机号码', trigger: 'blur' },
          { type: 'number', message: '手机号码必须为数字值'}

        ],
        verificationCode: [
          { required: true, message: '请输入证件号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }


    }

}
</script>

<style scoped>

</style>
