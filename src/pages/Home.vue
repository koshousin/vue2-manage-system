<template>
    <div id="container">
      <v-head/>
      <v-aside/>
      <main>
        <Tag/>
        <div class="content">
          <keep-alive include="Dashboard">
            <router-view></router-view>
          </keep-alive>
        </div>
      </main>
    </div>
</template>
<script>
  import VHead from '../components/Head.vue'
  import VAside from '../components/SideBar.vue'
  import Tag from '../components/Tags.vue'
  export default {
    name:'Home' ,
    components : {VHead,VAside,Tag},
    mounted(){
      console.log('home mounted...');
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
</style>
