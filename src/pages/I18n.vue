<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem>国际化产品</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <span style="marginRight:2rem;"> <i>通过切换语言按钮，改变当前内容的语言</i> </span>
        <Button 
          size="small" 
          type="primary"
          @click="handleClick"
        >点击切换{{locale == 'ja' ? '日' : '英'}}语</Button>
        <p>{{$t("hello")}}</p>
        <p>{{$t("intro")}}</p>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,BreadcrumbItem,Button} from 'element-ui'
  export default {
    name:'I18n',
    components:{Breadcrumb,BreadcrumbItem,Button},
    data(){
      return {
        locale:'ja'
      }
    },
    methods:{
      handleClick(){
        if(this.locale == 'ja'){
          this.locale = 'en'
        }else {
          this.locale = 'ja'
        }
        this.$i18n.locale = this.locale;
      }
    }
  }
</script>
<style scoped>
  p{
    padding:1rem 0;
    font-size : 1.5rem;
    color:#000;
  }
</style>
