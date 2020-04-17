<template>
  <div class="wrap">
    <div class="maxbox box1">
      <h1>公众出行</h1>
      <ul class="ul1">
        <li v-for="(item,id) in list1" :key="id" @click="to(item.router)">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="maxbox">
      <h1>行业管理</h1>
      <ul class="ul2">
        <li v-for="(item, index) in list2" :key="index" @click="to(item.router)">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        {
          name: "精准导航",
          router: "/home"
        },
        {
          name: "公路旅游",
          router: ""
        },
        {
          name: "实时公交",
          router: ""
        }
      ],
      list2: [
        {
          name: "运营",
          router: ""
        },
        {
          name: "建设",
          router: ""
        },
        {
          name: "管养",
          router: ""
        },
        {
          name: "统计",
          router: ""
        }
      ]
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    console.log(1);
  },
  mounted() {},
  methods: {
    to(v) {
      if (!v) {
        this.base.warn(this, "暂无开放");
        return;
      }
      this.$router.push(v);
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #2f4e65;
  display: flex;
}
.maxbox {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
}
.box1::before {
  content: "";
  width: 1px;
  height: 80%;
  position: absolute;
  right: 0;
  top: 10%;
  border-right: 1px dashed skyblue;
}
.maxbox h1 {
  color: white;
  font-size: 36px;
  font-weight: 900;
  width: 50%;
  height: 50px;
  border: 1px solid skyblue;
  text-align: center;
  margin-top: 12%;
}
.maxbox p {
  color: white;
}
.maxbox ul {
  width: 50%;
  height: 50%;
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.maxbox ul li {
  width: 100%;
  border: 1px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.maxbox ul p {
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ul1 li {
  height: 30%;
}
.ul2 {
  /* border: 1px solid red; */
}
.ul2 li {
  height: 22%;
}
</style>