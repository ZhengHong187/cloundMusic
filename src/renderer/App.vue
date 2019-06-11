<template>
  <div id="app">
    <MusicHeader></MusicHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MusicHeader from "../renderer/components/musicHeader";
  export default {
    name: 'cloudmusic',
    components: {
      MusicHeader
    }
  };
</script>

<style lang="scss" >
 @import url('./assets/css/reset');
 @import './assets/iconfont/iconfont.css';
 @import url('./assets/css/base')
</style>

