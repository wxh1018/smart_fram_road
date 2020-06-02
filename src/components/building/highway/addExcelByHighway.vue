<template>
  <div>
    <el-card>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
      
      ]
    };
  },
  methods: {
    //移除上传文件的事件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //点击上传的文件的事件
    handlePreview(file) {
      console.log(file);
    },
    //超出上传文件数量的事件
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + this.fileList.length} 个文件`
      );
    },
    //移除上传文件事件
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style scoped>
</style>