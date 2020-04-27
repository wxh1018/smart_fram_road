<template>
    <div class="addProjectDrawer">
    <el-row class="top">
      <div>
        <i class="el-icon-document"></i>
        修改项目
      </div>
    </el-row>
    <el-row class="center">
      <div>
         <el-form
        :model="projectList"
        ref="projectListRef"
        label-width="100px"
      >
        <!-- 项目基本信息 -->
        <el-card>
          <div slot="header" style="background-color:#e2e2e2;">
            <span>基本信息</span>
          </div>
          <div class="text item">
            <el-row class="onerow">项目名称(必填）</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_name" clearable></el-input>
            </el-row >
            <el-row class="onerow">项目类型</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_type" clearable></el-input>
            </el-row>
            <el-row class="onerow">项目功能分类</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_gnfl" clearable></el-input>
            </el-row>
            <el-row class="onerow">行政等级</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_xzdj"  clearable></el-input>
            </el-row>
            <el-row class="onerow">县乡村道编号</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_xxcId"  clearable></el-input>
            </el-row>
            <el-row class="onerow">创建年份</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_year" clearable></el-input>
            </el-row>
          </div>
        </el-card>
       <!-- 项目资金信息 -->
        <el-card>
          <div slot="header" style="background-color:#e2e2e2;">
            <span>资金信息</span>
          </div>
          <div class="text item">
            <el-row class="onerow">总投资</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_ztz" clearable></el-input>
            </el-row >
            <el-row class="onerow">总补助</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_zbz" clearable></el-input>
            </el-row>
            <el-row class="onerow">车购税资金</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_bus" clearable></el-input>
            </el-row>
            <el-row class="onerow">地方自筹</el-row>
            <el-row class="tworow">
              <el-input v-model="projectList.pm_dfzc" clearable></el-input>
            </el-row>
          </div>
        </el-card>
      </el-form>
      </div>
    </el-row>
    <el-row class="bot">
      <el-button type="primary" size="mini" @click="goBack">关闭</el-button>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //项目信息
      projectList: {},
    };
  },
  created(){
    this.AddStyle('#app > section > section > section > main > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > form > div > div.el-card__header{background-color:#e2e2e2;height: 30px;display: flex;align-items: center;font-size: 18px;color: #0095ff;font-weight: bold;}')
    this.AddStyle('#app > div > main > div.right > div.content > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > form > div > div.el-card__body > div > div > div > input{height:38px}')
    this.AddStyle('#app > div > main > div.right > div.content > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > form > div > div.el-card__body{padding: 10px 20px 10px 20px;}')
    //路由传过来的值
    this.projectList=this.row
  },
  computed:{
    row(){
      return this.$store.state.editProject
    }
  },
  methods: {
    //全局页面样式
    AddStyle(a) {
      let style = document.createElement("style");
      let body = document.querySelector("head");
      body.append(style);
      let b = a.replace(/;/g, "!important;");
      let html = b;
      style.innerHTML = html;
    },
    //关闭抽屉事件
    goBack() {
      this.$emit("close");
      this.$router.push('/bridge')
    }
  }
};
</script>

<style scoped>
.addProjectDrawer {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.top {
  height: 5%;
  font-size: 15px;
  color: #00adff;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
}
.top > div {
  border-bottom: 2px solid #00adff;
  padding: 0 10px;
}
.center {
  height: 90%;
  border-top: 1px solid #e2e2e2;
  padding-top: 15px;
  overflow: auto;
}
.bot {
  height: 5%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: flex-end;
  border-top: 1px solid #e2e2e2;
}
.onerow{
      margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}
.tworow{
      margin-bottom: 5px;
}
</style>