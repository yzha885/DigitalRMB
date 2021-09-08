<template>
  <div class="binding">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="持卡人" prop="card_holder">
        <el-input v-model="ruleForm.card_holder" placeholder="">
        </el-input>
      </el-form-item>

      <el-form-item label="银行卡号" prop="bank_card_number">
        <el-input v-model="ruleForm.bank_card_number" maxlength="19" show-word-limit placeholder="">
        </el-input>
      </el-form-item>

      <el-form-item label="预留手机号" prop="mobile_number">
        <el-input v-model.number="ruleForm.mobile_number" maxlength="11" show-word-limit>
          <el-button slot="append" @click="getCode()">获取验证码</el-button>
        </el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verify_code">
        <el-input v-model="ruleForm.verify_code" placeholder="">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认绑定</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>


// import bindBank from "@/components/bindBank";
import axios from "axios";

export default {
  name: 'Binding',
  components: {
  },
  data() {
    return {

      ruleForm: {
        card_holder: '',
        bank_card_number:'',
        mobile_number: '12345678910',
        verify_code: '123456',
      },
      rules: {
        card_holder: [
          {required: true, message: '请输入持卡人姓名', trigger: 'blur'},
          {min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur'}
        ],
        bank_card_number: [
          {required: true, message: '请输入银行卡号', trigger: 'change'},
          {min: 19, max: 19, message: '银行卡号错误', trigger: 'blur'}
        ],
        mobile_number: [
          {required: true, message: '请输入手机号', trigger: 'change'},
          {min: 11, max: 11, message: '手机号码错误', trigger: 'blur'}
        ],
        verify_code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 6, max: 6, message: '验证码错误', trigger: 'blur'}
        ],
      },
    };
  },
  methods:{
    //发送手机验证码
    getCode(){

      if(!this.ruleForm.mobile_number){
        this.$alert('请输入手机号码', '错误', {
          confirmButtonText: '确定',
        });
      }else{
        axios.post('/api/judge_sms', {mobile_number:this.ruleForm.mobile_number}
        )
            .then((response) => {
              console.log(response.data)
              if(response.data.code==1){
                // this.$message({
                //   message: '验证码已发送至您手机，请查看',
                //   type: 'success',
                //   showClose: true
                // })
                alert('验证码已发送至您手机，请查看')

              }else{
                this.$message({
                  message: '短信发送失败， 请稍后重试',
                  type: 'warning',
                  showClose: true
                })

              }

            })
            .catch(function (error) {
              console.log(error)
              alert("短信发送失败，请稍后重试")
            });
      }
    },
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //jump into next page if meet all the validation
          console.log(this.ruleForm)
          axios.post('/api/bind_bank', this.ruleForm)
              // .then(function(response){
              //   console.log(response.data)
              // })
              .then((response) => {
                // console.log(response.data.code)
                if(response.data.code === 1){
                  console.log(response.data,'success')
                  this.$message({
                    message: '您的银行卡已绑定成功',
                    type: 'success'
                  });

                }
                else{
                  console.log('绑定失败')
                  this.$message({
                    message: '绑定失败，该银行卡已被绑定',
                    type: 'warning'
                  });
                }
              })
              .catch(function(error){
                console.log(error);
              });
        }
        else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    handleClick(tab, event){
      console.log(tab, event)
    }
  }
};
</script>

<style scoped>

</style>
