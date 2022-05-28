<template>
    <div id="container">
      <v-head/>
      <v-aside/>
      <main>
        <Tag/>
        <router-view></router-view>
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
</style>
