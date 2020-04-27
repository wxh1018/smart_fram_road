<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管养</el-breadcrumb-item>
      <el-breadcrumb-item>查询巡查信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="date" label="巡查日期" align="center"></el-table-column>
        <el-table-column prop="chengshi" label="巡查城市" align="center"></el-table-column>
        <el-table-column prop="type" label="巡查项目类型" align="center"></el-table-column>
        <el-table-column prop="pm_name" label="巡查项目名" align="center"></el-table-column>
        <el-table-column prop="leaders" label="巡查人" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="查询" placement="top" :enterable="false">
              <el-button
                type="success"
                icon="el-icon-search"
                size="mini"
                circle
                @click="showSearchSurvey(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                circle
                @click="editSearchSurvey(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="removeSearchSurvey(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-drawer title="展示抽屉" :visible.sync="drawerVisible" size="70%" :with-header="false">
      <router-view @close="closeDrawer" />
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表格的展示数据
      tableData: [
        {
          date: "2018-05-02",
          chengshi: "南京",
          type: "公路",
          pm_name: "韩涵线二段",
          leaders: "abc"
        },
        {
          date: "2020-03-02",
          chengshi: "南京",
          type: "桥梁",
          pm_name: "长江大桥",
          leaders: "bcd"
        },
        {
          date: "2019-05-02",
          chengshi: "南京",
          type: "公路",
          pm_name: "西绕城工程",
          leaders: "abc"
        },
        {
          date: "2020-01-02",
          chengshi: "南京",
          type: "桥梁",
          pm_name: "二桥",
          leaders: "abc"
        }
      ],
      //控制抽屉的显隐
      drawerVisible: false
    };
  },
  watch:{
    drawerVisible(v){
      //console.log(v)
      if(v == false){
        this.$router.push('/searchSurvey')
      }
    }
  },
  methods: {
    //查询方法
    showSearchSurvey(row) {
      console.log(row);
      this.drawerVisible = true;
      this.$store.commit("setSearchSurvey", row);
      this.$router.push("/searchSurvey/search");
    },
    //修改方法
    editSearchSurvey(row) {
      this.drawerVisible = true;
      this.$store.commit("setEditSurvey", row);
      this.$router.push("/searchSurvey/edit");
    },
    //删除方法
    async removeSearchSurvey(row) {
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
    closeDrawer() {
      this.drawerVisible = false;
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  padding-bottom: 15px;
  font-size: 14px;
}
.el-card {
  box-shadow: -2px -1px 5px #bbb6b6;
}
</style>