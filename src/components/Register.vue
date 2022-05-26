<template>
  <div class="register">
    <div class="register_box">
    <el-form ref="registerFormRef" label-width="100px" class="register_form" :model="registerForm" :rules="registerFormRules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="请确认密码" prop="password">
        <el-input type="password" v-model="registerForm.check_password"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="back">返回</el-button>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button type="info" @click="resetRegisterForm">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        username: 'admin',
        password: '123456',
        check_password: '123456'
      },
      registerFormRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在6-15个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetRegisterForm () {
      this.$refs.registerFormRef.resetFields()
    },
    register () {
      this.$refs.registerFormRef.validate(valid => {
        if (!valid) return
        this.$ajax.post('api/v1/user/register', this.registerForm).then(res => {
          this.$message({
            type: res.data.type,
            message: res.data.message,
            showClose: true,
            center: true
          })
        }
        )
      })
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.register {
  background-color: #2b4b6b;
  height: 100%;
}

.register_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.register_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
