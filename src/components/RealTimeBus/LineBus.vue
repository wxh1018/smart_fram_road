<template>
  <div class="lineBus-div">
    <div class="map-div" id="map"></div>
  </div>
</template>

<script>
var map = null;
export default {
  created() {},
  mounted() {
    this.creatMap();
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
    //初始化地图
    creatMap() {
      map = new AMap.Map("map", {
        zoom: 11, //级别
        // mapStyle: "amap://styles/normal",
        // center: [116.397428, 39.90923] //中心点坐标
        resizeEnable: true
      });


      
    }
  }
};
</script>

<style scoped>
.lineBus-div {
  height: 100%;
}
.map-div {
  background-color: aquamarine;
  height: 100%;
  width: 100%;
}
.panel {
  position: absolute;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
</style>