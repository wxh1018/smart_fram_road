<template>
  <div class="logistics-div">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营</el-breadcrumb-item>
      <el-breadcrumb-item>物流网点</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="logData" border stripe>
        <el-table-column label="公司名" prop="logName" align="center"></el-table-column>
        <el-table-column label="分类" prop="logType" align="center"></el-table-column>
        <el-table-column label="营业时间" prop="time" align="center"></el-table-column>
        <el-table-column label="公司地址" prop="address" align="center"></el-table-column>
        <el-table-column label="联系电话" prop="phone" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="searchBus(scope.row)">详细信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-drawer title="我是标题" :visible.sync="BusDrawerVisible" :withHeader="false" size="70%">
      <div class="drawer-div">
        <el-row class="top">
          <div>
            <i class="el-icon-document"></i>
            查询物流网点
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
                    <span class="one-col">公司名:</span>
                    <span class="two-col">{{thisLog.logName}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">分类:</span>
                    <span class="two-col">{{thisLog.logType}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">公司人数:</span>
                    <span class="two-col">{{thisLog.logPeopel}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">公司地址:</span>
                    <span class="two-col">{{thisLog.address}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">联系电话:</span>
                    <span class="two-col">{{thisLog.phone}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">营业时间:</span>
                    <span class="two-col">{{thisLog.time}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">是否支持上面取件:</span>
                    <span class="two-col">{{thisLog.ishome}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">所属公司:</span>
                    <span class="two-col">{{thisLog.company}}</span>
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
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logData: [
        {
          logName: "江宁顺丰",
          logType: "1级",
          logPeopel: "15",
          address: "一街道25号",
          phone: "15286487355",
          time: "06:00——20:00",
          ishome: "否",
          company: "顺丰"
        },
        {
          logName: "秦淮中通",
          logType: "2级",
          logPeopel: "32",
          address: "二街道25号",
          phone: "18752648525",
          time: "06:00——20:00",
          ishome: "是",
          company: "中通"
        },
        {
          logName: "玄武圆通",
          logType: "三级",
          logPeopel: "26",
          address: "三街道25号",
          phone: "15288887355",
          time: "06:30——21:00",
          ishome: "否",
          company: "圆通"
        }
      ],
      BusDrawerVisible: false,
      thisLog: {}
    };
  },
  created() {
    this.AddStyle(
      `#app > section > section > section > main > div > div.el-drawer__wrapper > div > div > section > div > div.center.el-row > div > div > div.el-card__header{background-color:#e2e2e2;height: 30px;display: flex;align-items: center;font-size: 18px;color: #0095ff;font-weight: bold;}`
    );
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
    searchBus(busRow) {
      this.BusDrawerVisible = true;
      this.thisBus = busRow;
    },
    goBack() {
      this.BusDrawerVisible = false;
    }
  }
};
</script>

<style scoped>
.logistics-div {
  height: 100%;
}
.el-breadcrumb {
  padding-bottom: 10px;
  font-size: 14px;
}
.el-card {
  box-shadow: -2px -1px 5px #bbb6b6;
}
.drawer-div {
  height: 100%;
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