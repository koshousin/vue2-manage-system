<template>
  <div class="route-wrapper">
    <div class="route-head">
      <Breadcrumb separator-class="el-icon-arrow-right">
        <BreadcrumbItem :to="{path:'/tabs'}">首页</BreadcrumbItem>
        <BreadcrumbItem>我的</BreadcrumbItem>
      </Breadcrumb>
    </div> 
    <div class="route-content">
      <Button type="primary" size="small" icon="el-icon-delete">批量删除</Button>
      <Select placeholder="地址" v-model="addrSelected" size="small" class="my-select">
        <Option 
          v-for="(addr,index) in addrOptions" 
          :key="index"
          :label="addr.label"
          :value="addr.value"
        ></Option>
      </Select>
      <MyInput 
        class="my-input"
        v-model="userInput" 
        placeholder="用户名"
        size="small"
      ></MyInput>
      <Button type="primary" size="small" icon="el-icon-search">搜索</Button>
      <MyTable
        :data="tableData"
        style="margin-top:2rem;"
        :border="true"
      >
        <TableColumn type="selection" width="55"></TableColumn>
        <TableColumn prop="id" label="ID" width="55"></TableColumn>
        <TableColumn prop="userName" label="用户名" width="100"></TableColumn>
        <TableColumn prop="balance" label="账户余额" width="100"></TableColumn>
        <TableColumn prop="address" label="地址" width="200"></TableColumn>
        <TableColumn prop="status" label="状态" width="100">
          <template slot-scope="scope">
            <Tag :type="scope.row.status == '成功' ? 'success':'danger'">{{scope.row.status}}</Tag>
          </template>
        </TableColumn>
        <TableColumn prop="registered" label="注册时间" width="150"></TableColumn>
        <TableColumn label="操作" width="100"></TableColumn>
      </MyTable>
    </div>
  </div>

</template>
<script>
  import {Button,Select,Option,Input,Breadcrumb,
          BreadcrumbItem,Table,TableColumn,Tag} from 'element-ui'
  export default {
      name:'Table',
      components:{Button,
                  Select,
                  Option,
                  MyInput:Input,
                  Breadcrumb,
                  BreadcrumbItem,
                  MyTable:Table,
                  TableColumn,
                  Tag},
      data(){
        return {
          userInput:'',
          addrSelected:'',
          tableData: [
            {
              id:'1',
              userName:'张三',
              balance:123,
              address:'美国田纳西州阿尔法市',
              status:'成功',
              registered:'2011-2-3',
            },
            {
              id:'2',
              userName:'李四',
              balance:23,
              address:'伦敦剑桥区顿可街',
              status:'失败',
              registered:'2011-2-3',
            },
            {
              id:'3',
              userName:'王五',
              balance:12334,
              address:'巴黎第五大道香榭丽舍',
              status:'成功',
              registered:'2011-2-3',
            }
          ],
            multipleSelection: [],
            addrOptions:[
              {
                label:'广东',
                value:'guangdong'
              },
              {
                label:'云南',
                value:'yunnan'
              },
            ]
        }
      },
      methods:{
        handleSelectionChange(){

        }
      }
  }
</script>
<style scoped>
  .my-select {
    width:10rem;
    margin:0 3rem;
  }
  .my-input{
    width:30rem;
    margin:0 3rem;
    margin-left:0;
  }
</style>
