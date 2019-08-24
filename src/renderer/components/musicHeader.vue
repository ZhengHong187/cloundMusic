<template>
  <div class="header">
    <div class="logoTitle">
      <img src="../assets/cloudTitle.png">
    </div>
    <div class="rightMain">
      <i class="iconfont icon-geren" style="-webkit-app-region: no-drag;" v-show="!userName"></i>
      <img class="userimg" :src="avatarUrl" v-show="userName" />
      <p class="state" style="-webkit-app-region: no-drag;" @click="dialogVisible = true" v-show="!userName">未登录</p>
      <p class="state" style="-webkit-app-region: no-drag;" v-show="userName" @click="showDrap">{{nickName}}</p>
      <i class="iconfont icon-xiasanjiao" style="-webkit-app-region: no-drag;" v-if="!userName"></i>
      <i class="iconfont icon-xiasanjiao" style="-webkit-app-region: no-drag;" v-if="userName" @click="showDrap"></i>
      <i class="iconfont icon-yifu" style="-webkit-app-region: no-drag;"></i>
      <i class="iconfont icon-youjian" style="-webkit-app-region: no-drag;"></i>
      <i class="iconfont icon-shezhi-tianchong" style="-webkit-app-region: no-drag;"></i>
    </div>
    <div class="win">
      <i>|</i>
      <i class="iconfont icon-jianhao" style="-webkit-app-region: no-drag;" @click="min"></i>
      <i class="iconfont icon-rectangle" style="-webkit-app-region: no-drag;" @click="max"></i>
      <i class="iconfont icon-code" style="-webkit-app-region: no-drag;" @click="close"></i>
    </div>
    <loginModal v-show="loginModalShow" />
    <el-dialog title="注册" :visible.sync="dialogVisible" modal="modal" append-to-body="append"
      modal-append-to-body="toBody" width="50%" :before-close="handleClose">
      <!-- <span>这是一段信息</span> -->
      <div class="lineRegister">
        <el-input v-model="input" placeholder="请输入注册手机号"></el-input>
      </div>
      <div class="lineRegister">
        <el-row type="flex" justify="space-between">
          <el-col :span="14">
            <!-- <div class="grid-content bg-purple-dark"></div> -->
            <el-input placeholder="请输入验证码" v-model="input" show-password></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="danger" size="small" round>发送验证码</el-button>
          </el-col>
          <el-col :span="1">
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  const {
    ipcRenderer
  } = require('electron')
  import loginModal from './loginModal'
  export default {
    data() {
      return {
        loginModalShow: false,
        userName: false,
        avatarUrl: '',
        nickName: '',
        dialogVisible: false,
        modal: false,
        append: true,
        toBody: true

      }
    },
    methods: {
      // 窗口最小化
      min() {
        ipcRenderer.send('min')
        console.log('关闭1d穿')
      },
      // 窗口最大化
      max() {
        ipcRenderer.send('max')
      },
      // 关闭窗口
      close() {
        ipcRenderer.send('close')
      },
      // 登录注册
      dialogVisible() {
        console.log('登录')
        this.loginModalShow = true
      },
      // 用户名下拉
      showDrap() {},
      handleClose(done) {
        done()
      }
    },
    components: {
      loginModal
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/css/base.scss';

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

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
        color: rgba(255, 255, 255, .6);

        &:hover {
          color: white;
          transition: color .2s ease-in;
        }

        &:last-child,
        &:nth-last-of-type(2) {
          padding-left: 8px;
        }

        &:last-child {
          padding-right: 15px;
        }
      }
    }

    .rightMain {
      flex: 1 0 auto;
      display: flex;
      align-content: center;
      justify-content: flex-end;
      margin-right: -520px;
      margin-top: 8px;
      z-index: 99;
      cursor: pointer;

      .userimg {
        width: 25px;
        height: 25px;
        border: none;
        border-radius: 50%;
      }

      i {
        padding-left: 25px;
        color: rgba(255, 255, 255, .6);

        &:hover {
          color: white;
          transition: color .2s ease-in;
        }

        &:first-child {
          font-size: 22px;
        }

        &:nth-of-type(2) {
          padding-left: 5px;
        }
      }

      .state {
        &:hover {
          color: rgb(255, 255, 255);
          transition: color .2s ease-in;
        }

        font-size: 12px;
        color: rgba(255, 255, 255, .6);
        padding-left: 8px;
      }
    }

  }

  .lineRegister {
    margin-bottom: 20px;

    .cotifycode {
      margin-left: 20rpx;
    }
  }
</style>