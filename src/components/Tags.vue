<template>
    <div>
      <transition-group name="tag">
        <Tag 
          v-for="(tag,index) in tagList" 
          closable
          size="small"
          @click="handleClick(tag.name)"
          @close ="handleClose(tag.id,tag.isActive,index)"
          :class="{active:tag.isActive,dark:tag.isActive}"
          :key="tag.id">
          {{tag.title}}
        </Tag>
      </transition-group>
      <Dropdown 
        trigger="click"
        >
        <Button type="primary" size="mini">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </Button>
        <DropdownMenu slot="dropdown">
          <DropdownItem @click.native="closeOther">关闭其他</DropdownItem>
          <DropdownItem @click.native="closeAll">关闭所有</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
</template>
<script>
  import {Tag,Button,DropdownMenu,DropdownItem,Dropdown} from 'element-ui'
  export default {
    name:'Tags',
    components :{Tag,Button,Dropdown,DropdownMenu,DropdownItem},
    data(){
      return {
        /* 最大容量8个，多的话第一个去掉，尾部插入 */
        tagList :[{
          id:'001',
          title:'系统首页',
          isActive:true,
          name:'dashboard'
        }]
      }
    },
    methods:{
      handleClose(id,isActive,index){
        // (curIndex - 1 + length) % length
        if(this.tagList.length > 1){
          this.tagList.splice(index,1);
          if(isActive && index > 0){
            this.$router.push(`/${this.tagList[index-1].name}`);
          }else if(isActive && index === 0){
            this.$router.push(`/${this.tagList[index].name}`);
          }
        }else {
          /* 如果最后一个标签页则直接导航到首页 */
          if(this.tagList[0].name === 'dashboard'){
            return ;
          }
          this.tagList = []
          this.$router.push('/dashboard');
        }
      },
      handleClick(name){
        if(!this.timer){
          this.$router.push(`/${name}`);
          this.timer = setTimeout(() => {
            this.timer = 0;
          },1000);
        }
      },
      closeOther(){
        this.tagList = this.tagList.filter(tag => tag.isActive)
      },
      closeAll(){
       this.tagList = [];
       this.$router.push('/dashboard');
      }
    },
    mounted(){
      //console.log('tags mounted...');
      this.$bus.$on('addTag',(data)=>{
        if(this.tagList.find(tag => tag.title === data.title)){
           this.tagList = this.tagList.map(tag => {
              if(tag.title === data.title){
                tag.isActive = true;
              }else {
                tag.isActive = false;
              }
              return tag;
            });
          return;
        }else if(this.tagList.length >= 8){
          this.tagList.shift();
        }
        this.tagList = this.tagList.map(tag => {
          tag.isActive = false;
          return tag;
        });
        this.tagList.push(data);
      });
    },
    beforeDestroy(){
      this.$bus.$off('addTag');
    }

  }
</script>
<style scoped>
  div {
    height:4rem;
    line-height:4rem;
    padding:0 0.2rem;
    overflow :hidden;
    box-shadow:0 0.3rem 1rem #ddd;
  }
  span {
    color:rgb(102,102,102);
    margin-right:0.7rem;
  }
  span:hover {
    cursor:pointer;
  }
  .active {
    color:#fff;
  }
  .el-dropdown {
    float:right;
    padding:0 0.2rem;
  }
  /* 标签过渡样式 */
  .tag-enter,.tag-leave-to{
    opacity:0;
  }
  .tag-enter-active,.tag.leave-active{
    transition:all 0.25s;
  }
  .tag-enter-to,.tag-leave{
    opacity:1;
  }
  .dark{
    background-color:rgb(64,158,255);
    color:#fff;
  }

</style>
