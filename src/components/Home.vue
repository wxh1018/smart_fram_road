<template>
  <el-container class="home-container">
    <el-header>
      <el-row class="header-content">
        <el-col :span="4"></el-col>
        <el-col class="title-center" :span="16">{{this.$store.state.title}}</el-col>
        <el-col class="title-right" :span="4">
          <img style="height: 80%;" @click="exit" src="../assets/img/logo.png" alt />
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 左 -->
      <el-aside width="200px">
        <el-menu
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(4, 16, 39)"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          :default-active="$route.path"
        >
        <!-- /daohang -->
          <el-menu-item :index="'8'">
            <i class="iconfont icon-daohang"></i>
            <span slot="title">精准导航</span>
          </el-menu-item>
          <!-- '/roudTravel' -->
          <el-menu-item :index="'5'">
            <i class="iconfont icon-lvyou"></i>
            <span slot="title">公路旅游</span>
          </el-menu-item>
          <!-- '/realTimeBus' -->
          <el-menu-item :index="'6'">
            <i class="iconfont icon-yiliaohangyedeICON-"></i>
            <span slot="title">实时公交</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-jianshe"></i>
              <span>建设</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/highway'">
                <span>公路</span>
              </el-menu-item>
              <el-menu-item :index="'/bridge'">
                <span>桥梁</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-icon-"></i>
              <span>管养</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/searchSurvey'">
                <span>查询巡查信息</span>
              </el-menu-item>
              <el-menu-item :index="'/sruvey'">
                <span>增加巡查信息</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-yunying"></i>
              <span>运营</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/oeration-Bus'">
                <span>村镇公交</span>
              </el-menu-item>
              <el-menu-item :index="'/oeration-logistics'">
                <span>物流网点</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-tongji"></i>
              <span>统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/highwayStatistics'">
                <span>公路</span>
              </el-menu-item>
              <el-menu-item :index="'/bridgeStatistics'">
                <span>桥梁</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="home-body">
        <!-- 右-中 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 右-下 -->
        <el-footer>
          <el-row>
            <el-col :span="24">江苏纬信工程咨询有限公司</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">江苏智城慧宁提供技术支持</el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
var map = null;
export default {
  created() {
    this.base.AddStyle(`.el-submenu__title:hover{
  background-color: aqua!important;
}`);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jump(v) {
      this.$router.push(v);
    },
    exit() {
      this.$router.push("/login");
      this.login_js.ClearToken();
    }
  }
};
</script>
<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}
.el-header {
  width: 100%;
  height: 100%;
  background-color: rgb(4, 16, 39);
  margin: 0px;
  padding: 0px;
}
.el-aside {
  width: 100%;
  height: 100%;
}
.home-body {
  width: 100%;
  height: 100%;
}
.el-main {
  height: 300px;
}
.el-footer {
  width: 100%;
  height: 100%;
  background-color: rgba(187, 184, 184, 0.7);
  text-align: center;
  padding-top: 15px;
  letter-spacing: 3px;
}
.header-content {
  width: 100%;
  height: 100%;
}
.header-content > .el-col {
  height: 100%;
}
.title-right {
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
}
.title-center {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  letter-spacing: 10px;
  color: #fff;
  font-weight: bold;
}
.el-menu {
  height: 100%;
}
</style>