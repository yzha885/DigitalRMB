<template>
  <div class="hello">
    <el-form ref="form" :model="form" label-width="80px">
<!--      客户姓名-->
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
<!--      证件类型 drop down list-->
      <el-form-item label="证件类型">
        <el-select v-model="form.region" placeholder="请选择证件类型">
          <el-option label="大陆居民身份证" value="1"></el-option>
          <el-option label="士兵证/军官证/警官证" value="2"></el-option>
          <el-option label="港澳通行证" value="3"></el-option>
<!--          <el-option label="护照" value="4"></el-option>-->
        </el-select>
      </el-form-item>
<!--      证件号码-->
      <el-form-item label="证件号码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
<!--     所在学校-->
      <el-form-item label="所在学校">
        <el-input v-model="form.university"></el-input>
      </el-form-item>
<!--      院系-->
      <el-form-item label="院系">
        <el-input v-model="form.university"></el-input>
      </el-form-item>
<!--      专业信息-->
      <el-form-item label="所学专业">
        <el-input v-model="form.university"></el-input>
      </el-form-item>

<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit">立即创建</el-button>-->
<!--&lt;!&ndash;        <el-button>取消</el-button>&ndash;&gt;-->
<!--      </el-form-item>-->
      <el-form-item>
        <!--    <el-button >开户</el-button>-->
        <router-link
            to="/informationCont"
            tag="el-button">
         下一步
        </router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
