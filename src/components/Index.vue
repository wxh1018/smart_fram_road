<template>
  <div class="wrap">
    <div class="title">智慧农路云平台</div>
    <div class="maxbox">
      <ul class="one-ul">
        <li class="img1" @click="toDaoHang">精准导航</li>
        <li style="margin-left:5%;" class="img2" @click="toLvYou">公路旅游</li>
        <li style="margin-left:5%;" class="img3" @click="toGongJiao">实时公交</li>
      </ul>
      <ul class="two-ul">
        <li class="img4" @click="toJianShe">建设</li>
        <li style="margin-left: 2.66%;" class="img5" @click="toGuanYang">管养</li>
        <li style="margin-left: 2.66%;" class="img6" @click="toYunYing">运营</li>
        <li style="margin-left: 2.66%;" class="img7" @click="toTongJi">统计</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    
  },
  mounted() {},
  methods: {
    to(v) {
      if (!v) {
        this.base.warn(this, "暂无开放");
        return;
      }
      this.$router.push(v);
    },
    //精准导航
    toDaoHang() {
      this.$router.push({path:'/daohang'+'',name:"daohang"});
    },
    //公路旅游
    toLvYou() {
      //this.rounded.push('/realTimeBus')
      this.$message.error("暂未开放");
    },
    toGongJiao() {
      this.$message.error("暂未开放");
    },
    //建设
    toJianShe() {
      this.$router.push({path:"/highway"});
    },
    //管养
    toGuanYang() {
      this.$router.push('/searchSurvey')
    },
    //运营
    toYunYing() {
      this.$router.push('/oeration-Bus')
    },
    //统计
    toTongJi() {
      this.$router.push("/highwayStatistics");
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #102971;
}
.title {
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 15px;
}
.maxbox {
  width: 70%;
  height: 60%;
  margin-left: 15%;
  margin-top: 3%;
}
.maxbox ul li {
  border-radius: 5px;
  cursor: pointer;
}
.one-ul {
  width: 100%;
  height: 50%;
}
.one-ul li {
  float: left;
  width: 30%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}
.two-ul {
  width: 100%;
  height: 50%;
  margin-top: 2%;
}
.two-ul li {
  float: left;
  width: 23%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;
  font-size: 32px;
  font-weight: bold;
}
.img1 {
  background-image: url("../../static/icon/jzdh1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #0984e3;
  color: #fff;
}
.img1:hover {
  background-image: url("../../static/icon/jzdh2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #fff;
  color: #1298cc;
}
.img2 {
  background-image: url("../../static/icon/ly1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #5f27cd;
  color: #fff;
}
.img2:hover {
  background-image: url("../../static/icon/ly2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #fff;
  color: #1298cc;
}
.img3 {
  background-image: url("../../static/icon/bus1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #1e3799;
  color: #fff;
}
.img3:hover {
  background-image: url("../../static/icon/bus2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-color: #fff;
  color: #1298cc;
}
.img4 {
  background-image: url("../../static/icon/jianshe1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #ee5253;
  color: #fff;
}
.img4:hover {
  background-image: url("../../static/icon/jianshe2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #fff;
  color: #1298cc;
}
.img5 {
  background-image: url("../../static/icon/guanli1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #ffa502;
  color: #fff;
}
.img5:hover {
  background-image: url("../../static/icon/guanli2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #fff;
  color: #1298cc;
}
.img6 {
  background-image: url("../../static/icon/yunying1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #b33771;
  color: #fff;
}
.img6:hover {
  background-image: url("../../static/icon/yunying2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #fff;
  color: #1298cc;
}
.img7 {
  background-image: url("../../static/icon/tongji1.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #12cbc4;
  color: #fff;
}
.img7:hover {
  background-image: url("../../static/icon/tongji2.png");
  background-position: center 20%;
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-color: #fff;
  color: #1298cc;
}
</style>