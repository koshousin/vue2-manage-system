<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/form'}">表单</BreadcrumbItem>
          <BreadcrumbItem>markdown 编辑器</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <mavon-editor
         v-model="content" />
        <Button type="primary" size="small">提交</Button>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,BreadcrumbItem,Button} from 'element-ui'
  import "mavon-editor/dist/css/index.css";
  import mavonEditor from "mavon-editor";
  export default {
    name:'Markdown',
    components: {
      Breadcrumb,
      BreadcrumbItem,
      Button,
      'mavon-editor':mavonEditor
    },
    data(){
      return {
        content:''
      }
    }
  }
</script>
<style scoped>
</style>
