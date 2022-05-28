<template>
  <header>
    <i class="el-icon-s-unfold"></i>
    <span>后台管理系统</span>
    <div class="empty"></div>
    <Tooltip content="全屏">
      <Button>
        <i class="el-icon-rank rotate"></i>
      </Button>
    </Tooltip>
    <Badge :value="2">
      <Button>
        <i class="el-icon-chat-dot-square"></i>
      </Button>
    </Badge>
    <Avatar :src="avatar"></Avatar>
    <Dropdown trigger="click">
      <span class="el-dropdown-link">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <DropdownMenu >
        <DropdownItem>项目仓库</DropdownItem>
        <DropdownItem>退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </header>
</template>

<script>
  import {Tooltip,Button,Badge,Avatar,
    DropdownMenu,DropdownItem,Dropdown} from 'element-ui'
  import avatar from '../assets/img/avatar.jpg'
  export default {
    name:'Head',
    components:{Tooltip,Button,Badge,Avatar,
                DropdownItem,DropdownMenu,Dropdown},
    data(){
      return {
        avatar
      }
    },
    
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
  button {
    background-color:transparent;
    border:none;
    font-size:2.5rem;
    padding:0;
  }
  button:hover {
    background-color:transparent;
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