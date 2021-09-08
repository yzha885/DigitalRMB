<template>
  <div class="information">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="个人信息" name="first">
        <!--      客户姓名-->
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!--      证件类型 drop down list-->
        <el-form-item label="证件类型" prop="IDcard_type">
          <el-select v-model="ruleForm.IDcard_type" clearable @change="fnEdit" placeholder="请选择证件类型">
            <el-option label="居民身份证" value="1"></el-option>
            <el-option label="往来港澳通行证" value="2"></el-option>
            <el-option label="往来台湾通行证" value="3"></el-option>
            <el-option label="护照" value="4"></el-option>
          </el-select>
        </el-form-item>

        <!--      证件号码-->
        <el-form-item label="证件号码" prop="IDcard_number">
          <el-input v-model="ruleForm.IDcard_number" :maxlength="idLength" show-word-limit></el-input>
        </el-form-item>
        <!--     所在学校-->
        <el-form-item label="所在学校" prop="university">
          <el-input v-model="ruleForm.university"></el-input>
        </el-form-item>
        <!--      院系-->
        <el-form-item label="院系" prop="faculty">
          <el-input v-model="ruleForm.faculty"></el-input>
        </el-form-item>
        <!--      专业信息-->
        <el-form-item label="所学专业" prop="major">
          <el-input v-model="ruleForm.major"></el-input>
        </el-form-item>
      </el-tab-pane>


      <el-tab-pane label="手机验证" name="second">
        <el-form-item label="运营机构" prop="RMB_opreating_agency">
          <el-select v-model="ruleForm.RMB_opreating_agency" placeholder="请选择数字人民币运营机构" prop="RMB_opreating_agency">
            <el-option label="中国工商银行" value="1"></el-option>
            <el-option label="中国农业银行" value="2"></el-option>
            <el-option label="中国银行" value="3"></el-option>
            <el-option label="中国建设银行" value="4"></el-option>
            <el-option label="交通银行" value="5"></el-option>
            <el-option label="中国邮政储蓄银行" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile_number">
          <el-input v-model.number="ruleForm.mobile_number" maxlength="11" show-word-limit>
            <el-button slot="append" @click="getCode()" :disabled="tag" >获取验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode" >
          <el-input v-model="ruleForm.verificationCode" placeholder="">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>

      </el-tab-pane>
    </el-tabs>
    </el-form>
  </div>

</template>
<style>
.el-message{
  min-width:90vw;
}
</style>

<script>

// @ is an alias to /src
// import formOne from '@/components/personalInfo.vue'
// import formTwo from "@/components/mobileVerification";
import axios from "axios";
export default {

  name: 'Home',
  components: {

  },
  data() {
    return {
      tag:false,

      idLength:'18',
      activeName: 'first',
      ruleForm: {
        RMB_opreating_agency: '1',
        mobile_number:'12345678910',
        verificationCode: '111111',
        name: '',
        IDcard_type: '1',
        IDcard_number: '',
        university: '大学',
        faculty: '工程',
        major: '京津冀'
      },
      rules: {
        RMB_opreating_agency: [
          { required: true, message: '请输入运营机构', trigger: 'blur' },
        ],
        mobile_number: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号码必须为数字值',trigger: 'blur'}

        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '证件信息长度错误', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ],
        IDcard_type: [
          { required: true, message: '请选择证件类型', trigger: 'change' }
        ],
        IDcard_number: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
          { min: 18, max: 18, message: '证件信息长度错误', trigger: 'blur' }
        ],
        university: [
          { required: true, message: '请输入所在大学', trigger: 'blur' }
        ],
        faculty: [
          { required: true, message: '请输入院系', trigger: 'blur' }
        ],
        major: [
          { required: true, message: '请输入专业', trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
    fnEdit(){
      //根据不同的证件类型设定证据号码长度
      if(this.ruleForm.IDcard_type===1){
        this.rules.IDcard_number[1].min=18
        this.rules.IDcard_number[1].max=18
        this.idLength=18;
      }
      else if(this.ruleForm.IDcard_type===2){
        this.rules.IDcard_number[1].min=9
        this.rules.IDcard_number[1].max=9
        this.idLength=9;
      }
      else if(this.ruleForm.IDcard_type===3){
        this.rules.IDcard_number[1].min=9
        this.rules.IDcard_number[1].max=9
        this.idLength=9;
      }
      else if(this.ruleForm.IDcard_type===4){
        this.rules.IDcard_number[1].min=9
        this.rules.IDcard_number[1].max=9
        this.idLength=9;
      }
      console.log(this.ruleForm.IDcard_type);
      console.log(this.rules.IDcard_number[1].min);

    },
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
              if(response.data.code===1){
                this.$message({
                  message: '验证码已发送至您手机，请查看',
                  type: 'success',
                  showClose: true
                })
                //获取验证码被被禁用60秒
                let that =this
                this.tag=true
                let timer = setTimeout(function(){
                  that.tag=false
                  clearTimeout(timer)
                },60000)

              }else{
                this.$message({
                  message: '短信发送失败，请稍后重试',
                  type: 'warning',
                  showClose: true
                })
              }

            })
            .catch(function (error) {
              console.log(error)
              alert("短信发送失败-请稍后重试")
            });
      }
    },
    submitForm(formName) {
      // console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/get_form_data', this.ruleForm)
              .then((response) => {
                // console.log(response.data.code)
                if(response.data.code === 2){
                  console.log(response.data,'success')
                  // this.$alert('提交成功', '成功', {
                  //   confirmButtonText: '确定',
                  // })
                  this.$router.push('/result')
                }
                else if(response.data.code === 1){
                  console.log('用户已注册')
                  this.$message('该用户已注册');
                }
                else if(response.data.code === 0){
                  console.log('您输入的姓名或身份证号有误')
                  this.$message.error('您输入的姓名或身份证号有误');

                }
                else if(response.data.code === -1){
                  console.log('您输入的验证码有误')
                  this.$message.error('您输入的验证码有误');

                }
              })
              .catch(function (error) {
                console.log(error);
              });


        }
        else {
          // console.log('存在数据填写错误，请检查后重新提交')
          this.$message.error('存在数据填写错误，请检查后重新提交');

        }
      });
    },

    handleClick(tab, event) {
      console.log(tab, event);
    }

  }
};
</script>
