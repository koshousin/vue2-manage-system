<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/form'}">表单</BreadcrumbItem>
          <BreadcrumbItem>文件上传</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <div class="title">支持上传</div>
        <MyUpload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </MyUpload>
        <div class="title">支持裁剪</div>
        <VueCropper 
          :containerStyle="{'marginBottom':'2rem',width:'40rem'}"
          :imgStyle="{width:'30rem'}"
          :src="myImg"></VueCropper>
        <MyUpload
          list-type="picture-card"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-plus"></i>
        </MyUpload>
        <Button type="primary" size="small">提交</Button>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,BreadcrumbItem,Button,Upload} from 'element-ui'
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  import img from '../assets/img/avatar.jpg'
  export default {
    name:'Upload',
    components: {
      Breadcrumb,
      BreadcrumbItem,
      Button,
      MyUpload:Upload,
      VueCropper
    },
    data(){
      return {
        myImg:img
      }
    }
  }
</script>
<style scoped>
  .title {
    margin:3rem 0;
    font-size :2rem;
  }
</style>
