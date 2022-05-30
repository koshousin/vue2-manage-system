<template>
    <div class="route-wrapper">
      <div class="route-head">
        <Breadcrumb separator-class="el-icon-arrow-right">
          <BreadcrumbItem :to="{path:'/tabs'}">首页</BreadcrumbItem>
          <BreadcrumbItem >我的</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="route-content">
        <MyTab v-model="activeName">
          <TabPane label="未读消息（0）" name="first">
            <MyTable
              :data="messages"
              style="width:100%;margin-bottom:2rem;"
            >
              <TableColumn 
                prop="title" 
                :width="0.5"></TableColumn>
              <TableColumn 
                prop="date" 
                width="200"></TableColumn>
              <TableColumn width="100">
                 <template>
                  <Button size="small">标为已读</Button>
                 </template>
              </TableColumn>
            </MyTable>
            <Button type="primary" size="small">全部标为已读</Button>
          </TabPane>
          <TabPane label="已读消息（1）" name="alreadyRead">
            <MyTable
                :data="messages"
                style="width:100%;margin-bottom:2rem;"
              >
                <TableColumn 
                  prop="title" 
                  :width="0.5"></TableColumn>
                <TableColumn 
                  prop="date" 
                  width="200"></TableColumn>
                <TableColumn width="100">
                  <template>
                    <Button size="small" type="danger">删除</Button>
                  </template>
                </TableColumn>
              </MyTable>
            <Button type="danger" size="small">删除全部</Button>
          </TabPane>
          <TabPane label="回收站（2）" name="collection">
            <MyTable
              :data="messages"
              style="width:100%;margin-bottom:2rem;"
            >
              <TableColumn 
                prop="title" 
                :width="0.5"></TableColumn>
              <TableColumn 
                prop="date" 
                width="200"></TableColumn>
              <TableColumn width="100">
                 <template>
                  <Button size="small">还原</Button>
                 </template>
              </TableColumn>
            </MyTable>
            <Button type="danger" size="small">清空回收站</Button>
          </TabPane>
        </MyTab>
      </div>
    </div>
</template>
<script>
  import {Tabs,TabPane,Button,Table,TableColumn,Breadcrumb,BreadcrumbItem} from 'element-ui'
  import dayjs from 'dayjs'
  //import {nanoid} from 'nanoid'
  export default {
    name:'Tabs',
    components:{MyTab:Tabs,TabPane,
                Button,MyTable:Table,
                TableColumn,Breadcrumb,BreadcrumbItem},
    data(){
      return {
        activeName:'first',
        messages : [
          {
            title:'今晚大吉大利！',
            status : '',
            date:dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
          }
        ]
      }
    },
  }
</script>
<style scoped>
  .tab-wrapper{
    
  }
  .tab-content{
     background-color:#fff;
  }
</style>
