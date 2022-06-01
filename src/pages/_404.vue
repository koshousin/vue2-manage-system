<template>
    <div>
      <Empty description="啊哦，页面找不到了"></Empty>
      <Button type="primary" @click="backToHome">返回首页</Button>
      <Button type="primary" @click="backToLast">返回上一页</Button>
    </div>
</template>
<script>
  import {Button,Empty} from 'element-ui'
  export default {
    name:'404',
    components : {Button,Empty},
    methods:{
      backToHome(){
        this.$router.push('/dashboard');
      },
      backToLast(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  div {
    text-align : center;
  }
</style>
