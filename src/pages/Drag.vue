<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/drag'}">拖拽组件</BreadcrumbItem>
          <BreadcrumbItem>拖拽列表</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <div class="box-container">
          <div class="title">todo</div>
          <draggable v-model="todo" @remove="handleRemove" :options="dragOptions">
            <div class="box" v-for="item in todo" :key="item.id">{{item.content}}</div>
          </draggable>
        </div>
        <div class="box-container">
          <div class="title">doing</div>
          <draggable v-model="doing" @remove="handleRemove" :options="dragOptions">
            <div class="box" v-for="item in doing" :key="item.id">{{item.content}}</div>
          </draggable>
        </div>
        <div class="box-container">
          <div class="title">done</div>
          <draggable v-model="done" @remove="handleRemove" :options="dragOptions">
            <div class="box" v-for="item in done" :key="item.id">{{item.content}}</div>
          </draggable>
        </div>
      </div>
    </div>
</template>
<script>
  import {Breadcrumb,BreadcrumbItem,Message} from 'element-ui'
  import draggable from 'vuedraggable'
  import {nanoid} from 'nanoid'
  export default {
    name:'Drag',
    components :{
      Breadcrumb,
      BreadcrumbItem,
      draggable
    },
    data(){
      return {
        dragOptions:{
            animation: 120,
            scroll: true,
            group: 'sortlist',
            ghostClass: 'ghost-style'
        },
        todo: [
            {
                id: nanoid(),
                content: '开发图表组件'
            },
            {
                id: nanoid(),
                content: '开发拖拽组件'
            },
            {
                id: nanoid(),
                content: '开发权限测试组件'
            }
        ],
        doing: [
            {
                id: nanoid(),
                content: '开发登录注册页面'
            },
            {
                id: nanoid(),
                content: '开发头部组件'
            },
            {
                id: nanoid(),
                content: '开发表格相关组件'
            },
            {
                id: nanoid(),
                content: '开发表单相关组件'
            }
        ],
        done:[
            {
                id: nanoid(),
                content: '初始化项目，生成工程目录，完成相关配置'
            },
            {
                id: nanoid(),
                content: '开发项目整体框架'
            }
        ],
        Message
      }
    },
    methods:{
      handleClick(){
        this.Message({
          message:'hah',
          type:'success',
          duration:1000
        });
      },
      handleRemove(){
        // console.log(e.from)
        this.Message({
          message:`移动成功`,
          type:'success',
          duration:1000
        });
      }
    }
  }
</script>
<style scoped>
  .route-content{
    display:flex;
    padding:2rem 1rem;
    justify-content:space-around;
  }
  .box-container{
    width:32%;
    display:flex;
    flex-direction:column;
    border-radius:0.5rem;
    background-color:rgb(239,241,245);
  }
  .title{
    font-size:2rem;
    margin:1rem;
    font-weight:bold;
    text-align:center;
  }
  .box{
    margin:1.3rem 1.5rem;
    padding:1rem;
    font-size:1.5rem;
    background-color:#fff;
    border-radius:0.5rem;
    transition:outline 0.2s;
  }
  .box:hover{
    cursor:pointer;
    outline:1px solid rgb(64,158,255);
  }
</style>
