<template>
  <div class="lineBus-div">
    <div class="map-div" id="map"></div>
    <div id="travelPanel" class="travelPanel"></div>
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


      //https://lbs.amap.com/api/javascript-api/example/poi-search/multi-keywords-search
      AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({
          //构造地点查询类
           pageSize: 100, // 单页显示结果条数
           pageIndex: 1, // 页码
          city: "南京", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "travelPanel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        placeSearch.search("景区");
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
.travelPanel {
    position: absolute;
    background-color: white;
    height: 80%;
    overflow-y: auto;
    top: 10%;
    right: 10px;
    width: 280px;
}
</style>