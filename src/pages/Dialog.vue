<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/drag'}">拖拽组件</BreadcrumbItem>
          <BreadcrumbItem>拖拽弹框</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">

        <Button type="primary" @click="dialogVisible=true">点击弹框</Button>
        <MyDialog
          title="拖拽弹框"
          v-dialog-drag
          center
          :visible.sync="dialogVisible"
          width="30%"
          class="drag"
          >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <Button @click="dialogVisible = false">取 消</Button>
            <Button type="primary" @click="dialogVisible = false">确 定</Button>
          </span>
        </MyDialog>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,BreadcrumbItem,Dialog,Button} from 'element-ui'
  export default {
    name:'Dialog',
    components:{Breadcrumb,BreadcrumbItem,MyDialog:Dialog,Button},
    data(){
      return {
        dialogVisible:false
      }
    }
  }
</script>
<style scoped>
  
</style>
