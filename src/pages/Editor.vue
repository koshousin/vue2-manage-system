<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/form'}">表单</BreadcrumbItem>
          <BreadcrumbItem>编辑器</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <quillEditor
          style="margin-bottom:2rem;"
         :content="content"></quillEditor>
      </div>
    </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  import {Breadcrumb,BreadcrumbItem} from 'element-ui'
  export default {
    name:'Editor',
    components: {
      quillEditor,
      Breadcrumb,
      BreadcrumbItem,
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
