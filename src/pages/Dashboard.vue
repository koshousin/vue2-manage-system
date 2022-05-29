<template>
    <div class="container">
      <div class="item one">
        <Avatar 
          :size="100"
          icon="el-icon-user-solid"></Avatar>
        <div class="user-info">
          <div class="username">Admin</div>
          <div class="desc">超级管理员</div>
        </div>
        <div class="line"></div>
        <div class="login-info">上次登录事件：2019-11-01</div>
        <div class="login-info">上次登录地点：长沙</div>
      </div>
      <div class="item two">
        <div class="num-info">
          <i class="el-icon-user i-user"></i>
          <div class="num-detail">
            <div>1111</div>
            <div>用户浏览量</div>
          </div> 
        </div>
        <div class="num-info">
          <i class="el-icon-bell i-bell"></i>
          <div class="num-detail">
            <div>1111</div>
            <div>系统消息</div>
          </div> 
        </div>
        <div class="num-info">
          <i class="el-icon-shopping-bag-2 i-bag"></i>
          <div class="num-detail">
            <div>1111</div>
            <div>成交量</div>
          </div> 
        </div>
      </div>
      <div class="item three">
        <div class="lang-info">Vue</div>
        <Progress :percentage="34" color="green"></Progress>
        <div class="lang-info">Javascript</div>
        <Progress :percentage="12" color="yellow"></Progress>
        <div class="lang-info">CSS</div>
        <Progress :percentage="80" color="blue"></Progress>
        <div class="lang-info">HTML</div>
        <Progress :percentage="23" color="red"></Progress>
      </div>
      <div class="item four" >
        <div class="title">
          <span>待办事项</span>
          <span>添加</span>
        </div>
        <div class="todoList">
          <div class="todoItem" v-for="todo in todos" :key="todo.id">
            <Checkbox>Reading</Checkbox>
            <Button size="mini" type="danger">delete</Button>
            <Button size="mini">edit</Button>
          </div>
        </div>
      </div>
      <div class="item five">
        <Bar
          :chartOptions="itemsSale.options"
          :chartData="itemsSale.data"
          chartId="bar-chart1"
          :height="200"
          :width="300"
        />
      </div>
      <div class="item six">
        <MyLine
          :chartData="itemTrend.data"
          :chartOptions="itemTrend.options"
           chartId="line-chart1"
          :width="300"
          :height="200"
        />
      </div>
    </div>
</template>
<script>
  import {Avatar,Progress,Checkbox,Button} from 'element-ui';
  import {nanoid} from 'nanoid'
  import { Bar,Line as MyLine} from 'vue-chartjs/legacy'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale ,LineElement,PointElement} from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,LineElement,PointElement)

  export default {
    name:'Dashboard',
    components:{Avatar,
                Progress,
                Bar,
                MyLine,
                Checkbox,
                Button},
    data(){
      return {
        itemsSale:{
          data: {
            labels: [ '周一', '周二', '周三','周四','周五' ],
            datasets: [
               {label:'家电',backgroundColor:'skyblue',data:[234,278,270,190,230]}, 
               {label:'百货',backgroundColor:'orange',data:[164,178,190,135,160]},
               {label:'食品',backgroundColor:'red',data:[144,198,150,235,120]},
            ],
          },
          options: {
            responsive: true,
            plugins:{
              title:{
                display:true,
                font:{
                  size:20
                },
                text:'最近一周各类品销售图'
              }
            },
          }
        },
        itemTrend:{
          data: {
            labels: [ '六月', '七月', '八月','九月','十月'],
            datasets: [
               {label:'家电',borderColor:'skyblue',data:[234,278,270,190,230],fill:true,}, 
               {label:'百货',borderColor:'orange',data:[164,178,190,135,160],fill:false},
               {label:'食品',borderColor:'red',data:[144,198,150,235,120],fill:false},
            ],
          },
          options: {
            responsive: true,
            plugins:{
              title:{
                display:true,
                font:{
                  size:20
                },
                text:'最近几个月各类品销售趋势图'
              }
            },
          }
        },
        todos : [
          {
            id:nanoid(),
            content:'Reading',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'eating',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'Study',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'eating',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'Study',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'eating',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'Study',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'eating',
            isChecked:false
          },
          {
            id:nanoid(),
            content:'Study',
            isChecked:false
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .container {
    padding:1rem;
    overflow : auto;
    display :grid;
    grid-template-columns:repeat(6,1fr);
    grid-template-rows : repeat(7,1fr);
    grid-gap:1.5rem;
  }
  .item:not(.two) {
    padding:1.5rem;
    background-color:#fff;
  }
  .item:not(.two):hover,.num-info:hover{
    transition:box-shadow 0.23s;
    box-shadow: 
      0.3rem 0.3rem 0.5rem 0.3rem #ddd,
      -0.3rem -0.3rem 0.5rem 0.3rem #eee;
  }
  .one,.three{
    grid-column:span 2;
  }
  .two,.four{
    grid-column : span 4;
  }
  .five ,.six {
    grid-column : span 3;
    grid-row : 5 / 8;
  }
  /* 登录信息展示样式 */
  .one{
    display:flex;
    flex-wrap:wrap;
    height:25rem;
    grid-row: 1 / 3;
    align-items:center;
  }
  .user-info{
    width:50%;
    font-size:1.8rem;
    text-align:center;
    line-height:2;
  }
  .desc{
    color:var(--font-color-primary);
    font-size:1.5rem;
  }
  .line{
    width:100%;
    height:0.1rem;
    background-color:var(--font-color-primary);
  }
  .login-info{
    width:100%;
    color:var(--font-color-primary);
    font-size:1.4rem;
  }
  /* 数据信息展示样式 */
  .two {
    display:flex;
    justify-content:space-between;
    grid-row: 1 / 2;
  }
  .two > div {
    width:32%;
    font-size:1rem;
  }
  .i-user{
    background-color:rgb(45,140,240);
  }
  .i-bell {
    background-color:rgb(100,213,114);
  }
  .i-bag {
    background-color:rgb(242,94,67);
  }
  .num-info{
    background-color:#fff;
    display:flex;
    text-align:center;
    align-items:center;
    flex-wrap:wrap;
  }
  .num-info i{
    width:50%;
    height:100%;
    font-size:6rem;
    line-height:11rem;
    color:#fff;
  }
  .num-detail {
    width:50%;
    text-align:center;
  }
  .num-detail div:nth-child(1){
    font-size:3rem;
  }
  .num-detail div:nth-child(2){
    color:#aaa;
  }
  /* 语言详情 */
  .three {
    grid-row : 3 / 5;
  }
  .lang-info{
    font-size:1.5rem;
    margin:1rem;
  }
  /* 待办事项 */
  .four{
    grid-row :2 / 5;
  }
  .title {
    font-size:1.6rem;
    padding-bottom:1rem;
    border-bottom:1px solid #eee;
  }
  .title span:nth-child(2) {
    float : right;
    font-size:1.2rem;
    color:blue;
  }
  .title span:nth-child(2):hover{
    cursor:pointer;
  }
  .todoList{
    height:30rem;
    overflow:auto;
  }
  .todoItem{
    height:4rem;
    line-height:4rem;
    padding:0.5rem 1rem;
    transition:0.24s;
  }
  .todoItem:hover{
    background-color:#eee;
  }
  .todoItem button{
    float:right;
    margin-right:2rem;
  }
  
</style>
