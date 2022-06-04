<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem>权限测试</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <h1>管理员权限页面</h1>
        <p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {Breadcrumb,
          BreadcrumbItem,Message} from 'element-ui'
  export default {
    name:'Permission',
    components : {Breadcrumb,BreadcrumbItem},
    computed:{
      ...mapState('loginAbout',['userInfo'])
    },
    beforeMount(){
      if(this.userInfo.name !== 'admin'){
        setTimeout(() => {
          this.$router.replace('/dashboard');
        },3000)
        Message({
          type:'warning',
          message:'暂无权限，3秒后跳转'
        }); 
      }
    }
  }
</script>
<style scoped>
  h1 {
    font-size: 2rem;
    color:#000;
    text-align : center;
  }
  p {
    padding : 1rem 0;
    text-indent:1rem;
    font-size:1.5rem;
    color:#000;
  }
</style>
