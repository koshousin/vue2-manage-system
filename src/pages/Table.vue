<template>
  <div class="route-wrapper">
    <div class="route-head">
      <Breadcrumb separator-class="el-icon-arrow-right">
        <BreadcrumbItem>基础表格</BreadcrumbItem>
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
        size="medium"
        style="margin-top:2rem;text-align:center;"
        :data="persons.list"
        :border="true"
      >
        <TableColumn type="selection" align="center" min-width="20"></TableColumn>
        <TableColumn prop="id" align="center" label="ID" min-width="35"></TableColumn>
        <TableColumn prop="name" align="center" label="用户名" min-width="50"></TableColumn>
        <TableColumn prop="money" align="center" label="账户余额" min-width="50"></TableColumn>
        <TableColumn prop="address" align="center" label="地址" min-width="150"></TableColumn>
        <TableColumn prop="state" align="center" label="状态" min-width="50">
          <template slot-scope="scope">
            <Tag :type="scope.row.state == '成功' ? 'success':'danger'">{{scope.row.state}}</Tag>
          </template>
        </TableColumn>
        <TableColumn prop="date" align="center" label="注册时间" min-width="150"></TableColumn>
        <TableColumn label="操作" align="center" min-width="100">
          <Button type="primary" size="mini">编辑</Button>
          <Button type="danger" size="mini">删除</Button>
        </TableColumn>
      </MyTable>
      <Pagination
        background
        style="margin:2rem;"
        layout="prev, pager, next"
        :page-count="persons.pageTotal">
      </Pagination>
    </div>
  </div>

</template>
<script>
  import {mapActions,mapState} from 'vuex'
  import {Button,Select,Option,Input,Breadcrumb,
          BreadcrumbItem,Table,TableColumn,Tag,Pagination} from 'element-ui'
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
                  Pagination,
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
      computed:{
        ...mapState('personAbout',['persons'])
      },
      methods:{
        ...mapActions('personAbout',['getPersonList']),
        handleSelectionChange(){
        
        }
      },
      mounted(){
        this.getPersonList();
      }
  }
</script>
<style scoped>
  .el-pagination{
    text-align:center;
  }
  .cell {
    text-align:center;
  }
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
