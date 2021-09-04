<template>
  <div class="hello">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<!--      客户姓名-->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
<!--      证件类型 drop down list-->
      <el-form-item label="证件类型" prop="idCardType">
        <el-select v-model="ruleForm.idCardType" placeholder="请选择证件类型">
          <el-option label="大陆居民身份证" value="1"></el-option>
          <el-option label="士兵证/军官证/警官证" value="2"></el-option>
          <el-option label="港澳通行证" value="3"></el-option>
          <el-option label="护照" value="4"></el-option>
        </el-select>
      </el-form-item>

<!--      证件号码-->
      <el-form-item label="证件号码" prop="idCardNumber">
        <el-input v-model="ruleForm.idCardNumber"></el-input>
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

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
<!--        <el-button @click='nextStep()' >下一步</el-button>-->
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>



    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data() {
    return {
      ruleForm: {
        name: '',
        idCardType: '',
        idCardNumber: '',
        university: '',
        faculty: '',
        major: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        idCardType: [
          { required: true, message: '请选择证件类型', trigger: 'change' }
        ],
        idCardNumber: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
          { min: 9, message: '证件信息长度错误', trigger: 'blur' }
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

      }
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //jump into next page if meet all the validation
          alert('submit!');
          this.$router.push({path:'/informationCont',query:{name:this.ruleForm.name,cardType:this.ruleForm.idCardType,
            cardNumber:this.ruleForm.idCardNumber,uni:this.ruleForm.university,faulty:this.ruleForm.faculty,major:this.ruleForm.major}})
          //pass values into next page

          // this.$emit('add-form',this.ruleForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //       this.$emit('add-form',this.ruleForm);
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
