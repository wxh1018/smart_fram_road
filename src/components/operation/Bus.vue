<template>
  <div class="bus-div">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营</el-breadcrumb-item>
      <el-breadcrumb-item>村镇公交</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="busData" border stripe>
        <el-table-column label="车牌号" prop="busCard" align="center"></el-table-column>
        <el-table-column label="状态" prop="busStatus" align="center"></el-table-column>
        <el-table-column label="运营线路" prop="busLine" align="center"></el-table-column>
        <el-table-column label="联系人" prop="leaders" align="center"></el-table-column>
        <el-table-column label="所属公司" prop="company" align="center"></el-table-column>
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
            查询公交
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
                    <span class="one-col">车牌号:</span>
                    <span class="two-col">{{thisBus.busCard}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">状态:</span>
                    <span class="two-col">{{thisBus.busStatus}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">运营线路:</span>
                    <span class="two-col">{{thisBus.busLine}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">班次:</span>
                    <span class="two-col">{{thisBus.busBC}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">运输量:</span>
                    <span class="two-col">{{thisBus.busPeopel}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">司机:</span>
                    <span class="two-col">{{thisBus.leaders}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">司机电话:</span>
                    <span class="two-col">{{thisBus.phone}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">所属公司:</span>
                    <span class="two-col">{{thisBus.company}}</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="one-col">公司客服电话:</span>
                    <span class="two-col">{{thisBus.companyPhone}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="one-col">公司地址:</span>
                    <span class="two-col">{{thisBus.companyAddress}}</span>
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
      busData: [
        {
          busCard: "苏A12345",
          busStatus: "维修中",
          busLine: "1路",
          busBC: "3",
          busPeopel: "35",
          leaders: "aaa",
          phone: "15955751235",
          company: "一公司",
          companyPhone: "025 12352",
          companyAddress: "南京市江宁区"
        },
        {
          busCard: "苏A58265",
          busStatus: "停运",
          busLine: "2路",
          busBC: "4",
          busPeopel: "32",
          leaders: "bbb",
          phone: "15865425965",
          company: "二公司",
          companyPhone: "025 18552",
          companyAddress: "南京市秦淮区"
        },
        {
          busCard: "苏A52455",
          busStatus: "运行中",
          busLine: "5路",
          busBC: "2",
          busPeopel: "28",
          leaders: "cc",
          phone: "18523569825",
          company: "三公司",
          companyPhone: "025 52635",
          companyAddress: "南京市玄武区"
        }
      ],
      BusDrawerVisible: false,
      thisBus: {}
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
.bus-div {
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