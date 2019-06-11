<template>
  <div class="header">
      <div class="logoTitle">
          <img src="../assets/cloudTitle.png">
      </div>
      <div class="win">
          <i>|</i>
          <i class="iconfont icon-jianhao" style="-webkit-app-region: no-drag;" @click="min"></i>
          <i class="iconfont icon-rectangle" style="-webkit-app-region: no-drag;"  @click="max"></i>
          <i class="iconfont icon-code" style="-webkit-app-region: no-drag;" @click="close"></i>
      </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
      }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
.header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #C62F2F;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  .logoTitle img {
      height: 50px;
      width: 180px;
      margin-left: 20px;
  }
  .win {
      flex: 1 0 auto;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    i {
      padding-left: 25px;
      color: rgba(255,255,255,.6);
      &:hover {
        color: white;
        transition: color .2s ease-in;
      }
      &:last-child, &:nth-last-of-type(2) {
          padding-left: 8px;
      }
      &:last-child {
          padding-right: 15px;
      }
    }
  }

}
</style>

