<template>
    <div class="login-wrapper">
      <div class="login-box">
        <form @submit.prevent>
          <div class="head">欢迎来到管理系统！</div>
          <template v-if="isLogin">
             <MyInput
              prefix-icon="el-icon-user"
              v-model.trim="name"
              placeholder="User Name"
            >
            </MyInput>
            <MyInput
              prefix-icon="el-icon-lock"
              v-model="password"
              type="password"
              placeholder="Password"
            >
            </MyInput>
          </template>
          <template v-else>
             <MyInput
              prefix-icon="el-icon-user"
              v-model.trim="name"
              placeholder="User Name"
            >
            </MyInput>
            <MyInput
              prefix-icon="el-icon-lock"
              v-model="password"
              type="password"
              placeholder="Password"
            >
            </MyInput>
          </template>
          <Button type="primary" @click="onSubmit">{{isLogin ? '登录':'注册'}}</Button>
          <div class="footer">
            <i>{{isLogin ? '没有账号？':'已有帐号？'}}
              <em @click="changeStatus">{{isLogin ? '注册' :'登录'}}</em>
            </i>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
  import {Input,Button,Message} from 'element-ui'
  import dayjs from 'dayjs'
  import {mapActions} from 'vuex'
  export default {
    name:'Login',
    components:{MyInput:Input,Button},
    data(){
      return{
        name:'',
        password:'',
        date:'',
        isLogin:true,
      }
    },
    methods:{
      ...mapActions('loginAbout',['getLoginInfo','getRegisterProd']),
      onSubmit(){
        if(!this.name || !this.password){
          Message({
            type:'warning',
            message:'请输入完整信息'
          })
          return;
        }
        // 登录
        if(this.isLogin){
          this.getLoginInfo({
            name:this.name,
            password:this.password
          }).then(value => {
            // 登录成功
            Message({
              message:value,
              type:'success'
            });
            this.$router.push('/dashboard');
          }).catch(err => {
            // 登陆失败
            Message({
              message:err,
              type:'warning'
            });
          });
        // 注册
        }else {
          const data = {
            name:this.name,
            password:this.password,
            date:dayjs(Date.now()).format('YYYY-M-D') 
          }
          // this.getRegister(data)
          //   .then(value => {
          //     Message({
          //       message:value,
          //       type:'success'
          //     })
          //     this.$router.push('/dashboard');
          //   })
          //   .catch(err => {
          //     Message({
          //       message:err,
          //       type:'warning'
          //     })
          //   })
          this.getRegisterProd(data)
            .then(value => {
              Message({
                message:value,
                type:'success'
              })
            })
        }
      },
      changeStatus(){
        this.isLogin = !this.isLogin;
      }
    },
  }
</script>
<style scoped>
  .login-wrapper{
    height:100vh;
    width:100vw;
    background:0 / cover url('../assets/img/login-bg.jpg') fixed;
    position:relative;
  }
  .login-box {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:hsla(0,0%,100%,0.4);
    overflow:hidden;
    border-radius:1rem;
    height:30rem;
    width:40rem;
  }
  form {
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:space-around;
    padding:2rem 5rem;
  }
  .head {
    font-size : 2rem;
    text-align:center;
  }
  em {
    text-decoration:underline;
    color:blue;
  }
  em:hover{
    cursor:pointer;
  }
</style>
