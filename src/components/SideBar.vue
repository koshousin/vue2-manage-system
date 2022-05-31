<template>
    <aside>
      <Menu
        class="el-menu-vertical-demo"
        background-color= "#324157"
        text-color=rgb(191,203,217)
        unique-opened
        router 
        :collapse="isCollapse" 
        :collapse-transition="true"
      >
        <template  v-for="option in options">
          <MenuItem v-if="!option.subs" :index="option.index" :key="option.index">
            <i :class="option.icon"></i>
            <span slot="title">{{option.title}}</span>
          </MenuItem>
          <Submenu v-else :index="option.index" :key="option.index">
            <template slot="title">
              <i :class="option.icon"></i>
              <span slot="title">{{option.title}}</span>
            </template>
            <MenuItemGroup>
              <template v-for="subItem in option.subs">
                <MenuItem v-if="!subItem.subs" :index="subItem.index" :key="subItem.index">
                  <span slot="title">{{subItem.title}}</span>
                </MenuItem>
                <Submenu  v-else :index="subItem.index" :key="subItem.index">
                  <template slot="title">
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{subItem.title}}</span>
                  </template>
                  <MenuItem v-for="thirdSub in subItem.subs" :index="thirdSub.index" :key="thirdSub.index">
                    <span slot="title">{{thirdSub.title}}</span>
                  </MenuItem>
                </Submenu>
              </template>
            </MenuItemGroup>
          </Submenu>
        </template>
      </Menu>
    </aside>
</template>
<script>
  import {Menu,MenuItem,MenuItemGroup,Submenu} from 'element-ui'
  export default {
    name:'SideBar',
    components : {Menu,MenuItem,Submenu,MenuItemGroup},
    data(){
      return {
        options : [
          {
                    icon: 'el-icon-house',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-menu',
                    index: 'table',
                    title: '基础表格'
                },
                {
                    icon: 'el-icon-document-copy',
                    index: 'tabs',
                    title: 'tab选项卡'
                },
                {
                    icon: 'el-icon-tickets',
                    index: '3',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单'
                        },
                        {
                            index: '3-2',
                            title: '三级菜单',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                }
                            ]
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表'
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '拖拽组件',
                    subs: [
                        {
                            index: 'drag',
                            title: '拖拽列表'
                        },
                        {
                            index: 'dialog',
                            title: '拖拽弹框'
                        }
                    ]
                },
                {
                    icon: 'el-icon-position',
                    index: 'i18n',
                    title: '国际化功能'
                },
                {
                    icon: 'el-icon-warning',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                },
        ],
        isCollapse : false,
      }
    } ,
    mounted(){
      this.$bus.$on('changeCollapse',()=>{
        this.isCollapse = !this.isCollapse;
      });
    }
  }
</script>
<style scoped>
  aside {
    background-color:rgb(50,65,87);
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 25rem;
    
  }
  li:hover{
    background-color:rgb(40,52,71) !important;
  }
</style>
