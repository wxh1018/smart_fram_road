<template>
  <div class="addProjectDrawer">
    <el-row class="top">
      <div>
        <i class="el-icon-document"></i>
        查询项目
      </div>
    </el-row>
    <el-row class="center">
      <div>
        <!-- 项目基本信息 -->
        <el-card>
          <div slot="header" style="background-color:#e2e2e2;">
            <span>基本信息</span>
          </div>
          <div class="text item">
            <el-row>
              <el-col :span="12">
                <span class="one-col">项目名称:</span>
                <span class="two-col">{{projectList.pm_name}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">项目类型:</span>
                <span class="two-col">{{projectList.pm_type}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span class="one-col">项目功能分类:</span>
                <span class="two-col">{{projectList.pm_gnfl}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">行政等级:</span>
                <span class="two-col">{{projectList.pm_xzdj}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span class="one-col">县乡村道编号:</span>
                <span class="two-col">{{projectList.pm_xxcId}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">创建年份:</span>
                <span class="two-col">{{projectList.pm_year}}</span>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!-- 项目资金信息 -->
        <el-card>
          <div slot="header" style="background-color:#e2e2e2;">
            <span>资金信息</span>
          </div>
          <div class="text item">
            <el-row>
              <el-col :span="12">
                <span class="one-col">总投资:</span>
                <span class="two-col">{{projectList.pm_ztz}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">总补助:</span>
                <span class="two-col">{{projectList.pm_zbz}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span class="one-col">车购税资金:</span>
                <span class="two-col">{{projectList.pm_bus}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">地方自筹:</span>
                <span class="two-col">{{projectList.pm_dfzc}}</span>
              </el-col>
            </el-row>
          </div>
        </el-card>
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
      projectList: {}
    };
  },
  mounted() {
    this.$em.$on("on", () => {
      console.log(1);
    });
  },
  created() {
    this.AddStyle(
      "#app > section > section > section > main > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > div > div.el-card__header{background-color:#e2e2e2;height: 30px;display: flex;align-items: center;font-size: 18px;color: #0095ff;font-weight: bold;}"
    );
    this.AddStyle(
      "#app > div > main > div.right > div.content > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > div > div.el-card__body > div > div{padding-bottom: 10px;font-size: 15px;}"
    );
    this.AddStyle(
      "#app > div > main > div.right > div.content > div > div.el-card.is-always-shadow > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > form > div > div.el-card__body{padding: 10px 20px 10px 20px;}"
    );
    //路由传过来的值
    this.projectList = this.row;
  },
  computed: {
    row() {
      return this.$store.state.searchProject;
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
      this.$router.push("/highway");
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
.onerow {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}
.tworow {
  margin-bottom: 5px;
}
.text > .el-row > .el-col > .one-col {
  font-weight: bold;
}
.text > .el-row > .el-col > .two-col {
  padding-left: 10px;
  color: #777777;
}
</style>