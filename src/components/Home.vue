<template>
  <div class="wrap">
    <header>
      <div class="logo"></div>
      <div class="title">{{this.$store.state.title}}</div>
      <div class="exit">
        <img @click="exit" src="../assets/img/logo.png" alt="">
      </div>
    </header>
    <main>
      <div class="left">
        <el-col :span="24">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>公共出行</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="jump('/daohang')">精准导航</el-menu-item>
                <el-menu-item index="1-2" @click="jump('')">公路旅游</el-menu-item>
                <el-menu-item index="1-3" @click="jump('')">实时公交</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">行业管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="jump('/management/statistic')">统计</el-menu-item>
                <el-menu-item index="2-2" @click="jump('/management/building')">建设</el-menu-item>
                <el-menu-item index="2-3" @click="jump('')">管养</el-menu-item>
                <el-menu-item index="2-4" @click="jump('')">运营</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <div class="right">
        <div class="content">
          <router-view></router-view>
        </div>
        <Footer :arr="bottom" />
      </div>
    </main>
  </div>
</template>
<script>
import Footer from "./base/Footer";
var map = null;
export default {
  data() {
    return {
      img:require('../assets/img/logo.png')
    };
  },
  components: {
    Footer
  },
  computed: {
    bottom() {
      return this.$store.state.base_bottom;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jump(v){
      this.$router.push(v)
    },
    exit(){
      this.$router.push('/login')
      this.login_js.ClearToken()
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #cccccc;
  display: flex;
}
.logo {
  width: 220px;
  height: 100%;
  flex: 1 0 auto;
  background: #dddddd;
}
.exit{
  height: 100%;
  background: #545c64;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
}
.exit img{
  height: 70%;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 32px;
  background: #545c64;
}
main {
  flex: 1;
  display: flex;
}
.left {
  width: 220px;
  flex: 1 0 auto;
  height: 100%;
  box-sizing: border-box;
  background: #545c64;
}
.right {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
}
.content {
  height: 95%;
  width: 100%;
  background: rgba(245, 247, 250);
}
</style>