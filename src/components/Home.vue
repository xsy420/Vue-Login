<template>
  <div>
    <el-button @click="login">登录</el-button>
    <el-button @click="register">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

</style>
