<template>
  <header>
    <i @click="changeCollapse" v-show="!isFold" class="el-icon-s-fold"></i>
    <i @click="changeCollapse" v-show="isFold" class="el-icon-s-unfold"></i>
    <span>后台管理系统</span>
    <div class="empty"></div>
    <Tooltip :content="isFullScreen ? '取消全屏':'全屏' ">
        <i @click="handleClick"  class="el-icon-rank rotate"></i>
    </Tooltip>
    <Badge :value="2">
      <Tooltip content="dfafd">
        <i class="el-icon-chat-dot-square"></i>
      </Tooltip>
    </Badge>
    <Avatar :src="avatar"></Avatar>
    <Dropdown 
      trigger="click" 
      @command="handleExit">
      <span class="el-dropdown-link">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <DropdownMenu>
        <DropdownItem command="repo">
          <a href="https://github.com/koshousin/vue2-manage-system.git" target="_blank">项目仓库</a> 
        </DropdownItem>
        <DropdownItem command="exit">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </header>
</template>

<script>
  import {Tooltip,Badge,Avatar,
    DropdownMenu,DropdownItem,Dropdown} from 'element-ui'
  import avatar from '../assets/img/avatar.jpg'
  export default {
    name:'Head',
    components:{Tooltip,Badge,Avatar,
                DropdownItem,DropdownMenu,Dropdown},
    data(){
      return {
        avatar ,
        isFold:false,
        isFullScreen:false
      }
    },
    methods:{
      changeCollapse(){
        this.isFold = !this.isFold;
        this.$bus.$emit('changeCollapse');
      } ,
      handleClick(){
        const element = document.documentElement;
        if(this.isFullScreen){
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
        }else {
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
          }
        }
        this.isFullScreen = !this.isFullScreen;
      },
      handleExit(dir){
        if(dir === 'exit'){
          this.$router.replace('/login');
        }
      }
    }
  }
</script>

<style  scoped>
  header {
    background-color:rgb(36,47,66);
    font-size : 2.5rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
  }
  i,span {
    color :#fff;
  }
  i:hover{
    cursor:pointer;
  }
  .rotate {
    transform:rotate(45deg);
  }
   .el-dropdown-link {
    cursor: pointer;
  }
  .empty {
    width:60%;
  }
</style>