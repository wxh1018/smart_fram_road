<template>
  <div class="wrap">
    <div id="nanjingmap"></div>
    <div id="panel"></div>
    <div class="search">
      <el-input placeholder="请输入内容" v-model="start_posi">
        <template slot="prepend">起点</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="end_posi">
        <template slot="prepend">终点</template>
      </el-input>
      <div class="sel">
        <button>出行方式</button>
        <el-select v-model="Travel_mode" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="search">查询线路</el-button>
    </div>
  </div>
</template>
<script>
var map = null;
export default {
  data() {
    return {
      start_posi: "",
      end_posi: "",
      options: [
        {
          value: "驾车",
          label: "驾车"
        },
        {
          value: "步行",
          label: "步行"
        },
        {
          value: "骑行",
          label: "骑行"
        },
        {
          value: "公交",
          label: "公交"
        }
      ],
      Travel_mode: "驾车",
      city:'南京市'
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.creat_map();
    this.start();
  },
  methods: {
    creat_map() {
      map = new AMap.Map("nanjingmap", {
        zoom: 10, //级别
        zooms: [9, 13],
        zoomEnable: true,
        doubleClickZoom: true,
        center: [118.820041, 32.014397], //中心点坐标
        mapStyle: "amap://styles/85661922229fb1dbe5a2521042fde03c"
      });
    },
    drive() {
      //构造路线导航类
      var driving = new AMap.Driving({
        map: map,
        panel: "panel"
      });
      // 根据起终点名称规划驾车导航路线
      console.log(1);
      driving.search(
        [
          { keyword: this.start_posi, city: "南京" },
          { keyword: this.end_posi, city: "南京" }
        ],
        function(status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          console.log(result);
        }
      );
    },
    walk() {
      var walking = new AMap.Walking({
        map: map,
        panel: "panel"
      });
      walking.search(
        [
          { keyword: this.start_posi, city: "南京" },
          { keyword: this.end_posi, city: "南京" }
        ],
        function(status, result) {
          // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
          if (status === "complete") {
            log.success("绘制步行路线完成");
          } else {
            log.error("步行路线数据查询失败" + result);
          }
        }
      );
    },
    bus() {
      var transOptions = {
        map: map,
        city: "南京市",
        panel: "panel",
        policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
      };
      //构造公交换乘类
      var transfer = new AMap.Transfer(transOptions);
      //根据起、终点名称查询公交换乘路线
      transfer.search(
        [
          { keyword: this.start_posi, city: "南京市" },
          //第一个元素city缺省时取transOptions的city属性
          { keyword: this.end_posi, city: "南京市" }
          //第二个元素city缺省时取transOptions的cityd属性
        ],
        function(status, result) {
          // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
          if (status === "complete") {
            log.success("绘制公交路线完成");
          } else {
            log.error("公交路线数据查询失败" + result);
          }
        }
      );
    },
    riding() {
      //步行导航
      var riding = new AMap.Riding({
        map: map,
        panel: "panel"
      });
      riding.search(
        [
          { keyword: this.start_posi, city: this.city },
          { keyword: this.end_posi, city: this.city }
        ],
        function(status) {
          // result即是对应的骑行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_RidingResult
          if (status === "complete") {
            log.success("绘制骑行路线完成");
          } else {
            log.error("骑行路线数据查询失败" + result);
          }
        }
      );
    },
    search() {
      document.getElementById('panel').innerHTML = null
      if (this.Travel_mode == "驾车") {
        this.drive();
      } else if (this.Travel_mode == "步行") {
        this.walk();
      } else if (this.Travel_mode == "公交") {
        this.bus();
      } else if (this.Travel_mode == "骑行") {
        this.riding();
      }
    },
    start() {
      this.base.AddStyle(".el-input__inner{height: 40px;}");
      
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
#nanjingmap {
  width: 100%;
  height: 100%;
}
.search {
  width: 350px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 999;
  background: rgba(12, 189, 245, 0.2);
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 5px 20px;
}
.sel {
  width: 100%;
  height: 40px;
  display: flex;
}
.sel .el-select {
  flex: 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 100%;
}

.sel button {
  outline: none;
  border: none;
  border-top-left-radius: 2px;
  background: #f5f7fa;
}
#panel {
  position: absolute;
  right: 20px;
  top: 30px;
}
</style>