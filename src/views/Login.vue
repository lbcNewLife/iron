<template>
  <div class="loginPage">
    <img class='bg' alt="Login" src="../assets/login.png" />
    <img class='sysName' alt="System" src="../assets/sysName.png" />
    <div class="card">
        <Input v-model="userName" placeholder="请输入用户名" class="ipt-line">
            <img alt="userName" src="../assets/userName.png"  slot="prefix" />
        </Input>
        <Input v-model="password" placeholder="请输入密码" class="ipt-line">
            <img alt="password" src="../assets/password.png"  slot="prefix" />
        </Input>
        <van-checkbox v-model="remember" shape="square" checked-color="#ff5f18">记住密码</van-checkbox>
        <van-button block color="linear-gradient(to top, #06a6f7, #38c8fd)" @click="handleSubmit">登录</van-button>
    </div>
  </div>
</template>
<script>
import ls from '@/libs/ls.js'

export default {
    name: 'Login',
    data(){
        return {
            userName: '',
            password: '',
            remember: false,
            checkPoint: null,
            pageOption: null
        }
    },
    mounted(){
        this.checkPoint = this.$route.query.checkPoint ? this.$route.query.checkPoint : null
        this.pageOption = this.$route.query.pageOption ? this.$route.query.pageOption : null
        this.getPassword()
    },
    methods: {
        getPassword () {
            let type = ls.fetch('isremember')
            let user = ls.fetch('username')
            let pass = ls.fetch('password')
            if (type && pass && user) {
                this.password = pass
                this.userName = user
                this.remenber = true
            }
        },
        handleSubmit () {
            this.$store
                .dispatch('Login', { username: this.userName, password: this.password })
                .then(res => {
                    ls.saveSession('loginType', true)
                    ls.save('username', username)
                    ls.save('password', password)
                    ls.saveSession('username', username)
                    ls.saveSession('password', password)
                    if (this.remember) {
                        ls.save('isremember', true)
                    } else {
                        ls.save('isremember', false)
                    }
                })
                .catch(err => {

                })

        }
    }
}
</script>
<style lang="less">
    .loginPage{
        .ivu-input{
            height: 50px;
            width: 304px;
            font-size: 15px;
            border-radius: 0px;
            box-shadow: none;
            border-top:none !important;
            border-left:none !important;
            border-right:none !important;
        }
        .ivu-input-prefix{
            width: 14px;
            margin-left: 10px;
            line-height: 50px;
        }
        .van-checkbox{
            margin-left: 10px;
            margin-bottom: 65px;
        }
        .van-checkbox__icon{
            font-size: 16px;
            .van-icon{
                border-radius: 4px;
            }
        }
        .van-checkbox__label{
            font-size: 14px;
        }
        .van-button{
            border-radius: 5px;
        }
    }
</style>
<style lang="less" scoped>
    .loginPage{
        position: relative;
        width: 100%;
        img{
            width: 100%;
        }
        .sysName{
            position: absolute;
            z-index: 2;
            top: 75px;
            left: 0%;
        }
        .card{
            position: relative;
            top: -140px;
            box-sizing: border-box;
            box-shadow: 0px 3px 10px 0px rgba(104, 110, 110, 0.08);
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 68px;
            padding-bottom: 45px;
            width: 345px;
            background: white;
            margin: 0 auto;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }
        .ipt-line{
            margin-bottom: 45px;
        }
        
    }
</style>