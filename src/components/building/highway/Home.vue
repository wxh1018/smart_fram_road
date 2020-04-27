<template>
  <div class="building-div">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">
        <i class="el-icon-s-home"></i>首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>建设</el-breadcrumb-item>
      <el-breadcrumb-item>公路</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 添加项目按钮 -->
      <el-row>
        <el-button type="primary" size="mini" @click="addProject">添加项目</el-button>
      </el-row>
      <!-- 项目表格 -->
      <el-table :data="tableData" :stripe="true" border style="width: 100%">
        <el-table-column prop="pm_name" label="项目名称" align="center"></el-table-column>
        <el-table-column prop="pm_type" label="项目类型" align="center"></el-table-column>
        <el-table-column prop="pm_gnfl" label="项目功能分类" align="center"></el-table-column>
        <el-table-column prop="pm_xzdj" label="行政等级" align="center"></el-table-column>
        <el-table-column prop="pm_year" label="创建年份" align="center"></el-table-column>
        <el-table-column prop="pm_zbz" label="总投资" align="center"></el-table-column>
        <el-table-column prop="pm_zbz" label="总投资" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="查询" placement="top" :enterable="false">
              <el-button
                type="success"
                icon="el-icon-search"
                size="mini"
                circle
                @click="searchProject(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                circle
                @click="editProject(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                circle
                @click="removeProject(scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <!-- @size-change: 每页显示数据条数 改变的事件;  @current-change: 页码值 改变的事件;  :current-page: 当前显示第几页的数据;  :current-page：数据条数选择  :page-size: 当前页显示的数据条数  ：total: 数据条数 -->
      <!-- layout: 页面显示数据结构    total：总共数据条数；sizes：每页显示条数菜单 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[3, 5, 8, 10]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>

      <!-- 抽屉 -->
      <el-drawer title="抽屉" :visible.sync="addProjectVisible" :with-header="false" size="70%">
        <!-- 路由 -->
        <router-view @close="close" />
      </el-drawer>
    </el-card>
  </div>
</template>

<script>
//增加项目
export default {
  data() {
    return {
      tableData: [],
      //控制抽屉显隐
      addProjectVisible: false
    };
  },
  created() {
    this.AddStyle(
      "#app > div > main > div.right > div.content > div > div.el-breadcrumb > span > span.el-breadcrumb__inner{color:#696060;}"
    );
    this.getData();
  },
  watch: {
    //监听抽屉的开启状态，若抽屉关闭状态，则跳转返回至父路由
    addProjectVisible(v) {
      if (!v) {
        this.$router.push("/highway");
      }
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
    //获取项目信息
    getData() {
      this.tableData = [
        {
          pm_name: "韩涵线二段", //项目名称
          pm_type: "特色田园乡村通达项目", //项目类型
          pm_gnfl: "平安放心路", //项目功能分类
          pm_xzdj: "乡道", //行政等级
          pm_xxcId: "Y180320804", //县乡村道编号
          pm_year: "2019", //创建年份
          pm_ztz: "312", //总投资
          pm_zbz: "130", //总补助
          pm_bus: "59", //车购税资金
          pm_dfzc: "182" //地方自筹
        },
        {
          pm_name: "西绕城工程", //项目名称
          pm_type: "特色田园乡村通达项目", //项目类型
          pm_gnfl: "平安放心路", //项目功能分类
          pm_xzdj: "村道", //行政等级
          pm_xxcId: "Cv34320804", //县乡村道编号
          pm_year: "2019", //创建年份
          pm_ztz: "300", //总投资
          pm_zbz: "200", //总补助
          pm_bus: "100", //车购税资金
          pm_dfzc: "100" //地方自筹
        },
        {
          pm_name: "桃沿线", //项目名称
          pm_type: "特色田园乡村通达项目", //项目类型
          pm_gnfl: "平安放心路", //项目功能分类
          pm_xzdj: "乡道", //行政等级
          pm_xxcId: "Y503320804", //县乡村道编号
          pm_year: "2019", //创建年份
          pm_ztz: "100", //总投资
          pm_zbz: "100", //总补助
          pm_bus: "80", //车购税资金
          pm_dfzc: "20" //地方自筹
        },
        {
          pm_name: "桃高线", //项目名称
          pm_type: "特色田园乡村通达项目", //项目类型
          pm_gnfl: "平安放心路", //项目功能分类
          pm_xzdj: "村道", //行政等级
          pm_xxcId: "C069320804", //县乡村道编号
          pm_year: "2019", //创建年份
          pm_ztz: "50", //总投资
          pm_zbz: "50", //总补助
          pm_bus: "35", //车购税资金
          pm_dfzc: "15" //地方自筹
        }
      ];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //隐藏增加项目抽屉
    hideProjectDrawer() {
      this.addProjectVisible = false;
    },
    //增加项目事件
    addProject() {
      this.addProjectVisible = true;
      this.$router.push("/building/highway/addProject");
    },
    //查询项目事件
    searchProject(row) {
      this.addProjectVisible = true;
      this.$store.commit("setSearchProject", row);
      this.$router.push({
        path: "/building/highway/searchProject"
      });
    },
    //修改项目事件
    editProject(row) {
      this.addProjectVisible = true;
      this.$store.commit("setEditProject", row);
      this.$router.push({ path: "/building/highway/editProject" });
    },
    //删除项目事件
    async removeProject(row) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该项目, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => {
        return err;
      });
      //console.log(confirmResult)
      if (confirmResult != "confirm") {
        this.$message.info("已取消删除！");
      } else {
        this.$message.success("删除项目成功！");
      }
    },
    //关闭抽屉事件
    close() {
      this.addProjectVisible = false;
    }
  }
};
</script>

<style scoped>
.building-div {
  height: 100%;
}
.el-breadcrumb {
  padding-bottom: 15px;
  font-size: 14px;
}
.el-card {
  box-shadow: -2px -1px 5px #bbb6b6;
}
.el-table {
  margin-top: 15px;
}
.el-pagination {
  float: right;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
