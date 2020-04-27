<template>
  <div class="searchSurvey-div">
    <el-row class="top">
      <div>
        <i class="el-icon-document"></i>
        查询巡查信息
      </div>
    </el-row>
    <el-row class="center">
      <div>
        <el-card>
          <div slot="header" style="background-color:#e2e2e2;">
            <span>基本信息</span>
          </div>
          <div class="text item">
            <el-row>
              <el-col :span="12">
                <span class="one-col">巡查时间:</span>
                <span class="two-col">{{this.searchData.date}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">巡查城市:</span>
                <span class="two-col">{{this.searchData.chengshi}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span class="one-col">巡查项目类型:</span>
                <span class="two-col">{{this.searchData.type}}</span>
              </el-col>
              <el-col :span="12">
                <span class="one-col">巡查项目名:</span>
                <span class="two-col">{{this.searchData.pm_name}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span class="one-col">相关人员:</span>
                <span class="two-col">{{this.searchData.leaders}}</span>
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
  created() {
    console.log(this.searchData);
    this.AddStyle(`.searchSurvey-div > div.center.el-row > div > div > div.el-card__header{background-color:#e2e2e2;height: 30px;display: flex;align-items: center;font-size: 18px;color: #0095ff;font-weight: bold;}`);
  },
  computed: {
    searchData() {
      return this.$store.state.searchSurvey;
    }
  },
  methods: {
    AddStyle(a) {
      let style = document.createElement("style");
      let head = document.querySelector("head");
      head.append(style);
      let sty = a.replace(/;/g, "!important;");
      let html = sty;
      style.innerHTML = html;
    },
    goBack() {
      this.$emit("close");
      this.$router.push("/searchSurvey");
    }
  }
};
</script>

<style scoped>
.searchSurvey-div {
  padding: 0 10px;
  height: 100%;
}
.top {
  height: 5%;
  font-size: 15px;
  color: #00adff;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  padding-top: 10px;
}
.top > div {
  border-bottom: 2px solid #00adff;
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
</style>