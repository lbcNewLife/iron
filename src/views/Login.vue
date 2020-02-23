<template>
  <div class="loginPage">
    <img alt="Login" src="../assets/login.png" />
  </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            username: '',
            password: '',
            remember: false,
            checkPoint: null,
            pageOption: null
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
    .loginPage{
        width: 100%;
        img{
            width: 100%;
        }
    }
</style>