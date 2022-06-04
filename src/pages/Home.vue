<template>
    <div id="container">
      <v-head/>
      <v-aside/>
      <main>
        <Tag/>
        <div class="content">
            <keep-alive include="Dashboard">
              <transition name="page">
                <router-view></router-view>
              </transition>
            </keep-alive>
        </div>
      </main>
    </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import VHead from '../components/Head.vue'
  import VAside from '../components/SideBar.vue'
  import Tag from '../components/Tags.vue'
  export default {
    name:'Home' ,
    components : {VHead,VAside,Tag},
    methods:{
      ...mapMutations('loginAbout',{useLoginInfo:'HANDLE_LOGIN_INFO'})
    },
    beforeMount(){
      console.log('home mounted...');
      const data = JSON.parse(localStorage.getItem('userInfo'));
      if(!data){
        this.$router.replace('/login');
      }else {
        this.useLoginInfo(data);
      }
    }
  }
</script>
<style scoped>
  .content{
    height:calc(100% - 4rem);
    overflow:auto;
  }
  main {
    background-color:rgb(240,240,240);
  }
  .page-enter , .page-leave-to {
    opacity:0;
  }
  .page-enter-active,.page-leave-active {
    transition:opacity 0.25s ease;
  }
  .page-enter-to,.page-leave {
    opacity:1;
  }
</style>
