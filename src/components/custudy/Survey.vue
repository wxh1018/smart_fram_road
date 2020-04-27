<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管养</el-breadcrumb-item>
      <el-breadcrumb-item>增加巡查信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div slot="header" style="background-color:#e2e2e2;">
        <span>基本信息</span>
      </div>
      <div class="text item">
        <el-row class="onerow">巡查日期</el-row>
        <el-row class="tworow">
          <el-date-picker v-model="surveyData.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-row>
        <el-row class="onerow">巡查城市</el-row>
        <el-row class="tworow">
          <el-input v-model="surveyData.chengshi" placeholder="请输入城市"></el-input>
        </el-row>
        <el-row class="onerow">巡查区县</el-row>
        <el-row class="tworow">
          <el-input v-model="surveyData.quxian" placeholder="请输入区县"></el-input>
        </el-row>
        <el-row class="onerow">巡查乡镇</el-row>
        <el-row class="tworow">
          <el-input v-model="surveyData.xiangzhen" placeholder="请输入乡镇"></el-input>
        </el-row>
        <el-row class="onerow">巡查项目类型</el-row>
        <el-row class="tworow">
          <el-radio-group v-model="surveyData.type">
            <el-radio label="公路"></el-radio>
            <el-radio label="桥梁"></el-radio>
          </el-radio-group>
        </el-row>
        <el-row class="onerow">巡查项目名</el-row>
        <el-row class="tworow">
          <el-input v-model="surveyData.pm_name" placeholder="请输入项目名"></el-input>
        </el-row>
      </div>
    </el-card>
     <el-card>
      <div slot="header" style="background-color:#e2e2e2;">
        <span>相关领导信息</span>
      </div>
      <div class="text item">
        <el-row class="onerow">巡查人</el-row>
        <el-row class="tworow">
           <el-input v-model="surveyData.leaders"></el-input>
        </el-row>
        <el-row class="onerow">联系电话</el-row>
        <el-row class="tworow">
           <el-input v-model="surveyData.phone"></el-input>
        </el-row>
      </div>
    </el-card>
    <el-card>
      <div slot="header" style="background-color:#e2e2e2;">
        <span>项目存在问题</span>
      </div>
      <div class="text item">
        <el-row class="tworow">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="surveyData.czwt"></el-input>
        </el-row>
      </div>
    </el-card>
    <el-card>
      <div slot="header" style="background-color:#e2e2e2;">
        <span>项目图像信息</span>
      </div>
      <div class="text item">
        <el-row class="tworow">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="9"
            :on-exceed="handleExceed"
            :file-list="surveyData.fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-row>
      </div>
    </el-card>
    <el-row class="downButton">
        <el-button type="primary">提交信息</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      surveyData: {
        date: "",
        chengshi: "",
        quxian: "",
        xiangzhen: "",
        type: "",
        pm_name: "",
        leaders:'',
        phone:'',
        czwt: "",
        fileList: []
      }
    };
  },
  created() {
    this.AddStyle(
      "#app > section > section > section > main > div > div.el-card.is-always-shadow > div.el-card__header{background-color:#e2e2e2;height: 30px;display: flex;align-items: center;font-size: 18px;color: #0095ff;font-weight: bold;}"
    );
    this.AddStyle(
      `#app > section > section > section > main > div > div.el-card.is-always-shadow > div.el-card__body > div > div.tworow.el-row > div > input{height:38px;}`
    );
    this.AddStyle(
      `#app > section > section > section > main > div > div.el-card.is-always-shadow > div.el-card__body > div > div.tworow.el-row > div{width:100%}`
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
    //上传文件方法
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
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
.onerow {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}
.tworow {
  margin-bottom: 5px;
  padding: 5px;
}
.downButton{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    margin-right: 3%;
}
</style>