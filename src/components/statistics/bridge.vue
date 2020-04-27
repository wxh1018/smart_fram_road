<template>
  <div class="bridgeStatistics-div">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>统计</el-breadcrumb-item>
      <el-breadcrumb-item>桥梁</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 项目信息 -->
      <el-row class="title">项目信息</el-row>
      <el-card class="card-div">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card class="oneCard-title" shadow="always">
              <span class="one">项目数量</span>
              <span class="two">1519</span>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="oneCard-title" shadow="always">
              <span class="one">总投资（万元）</span>
              <span class="two">167230</span>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="oneCard-title" shadow="always">
              <span class="one">跨径总长（米）</span>
              <span class="two">40478.12</span>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
      <!-- 项目类型 -->
      <el-row class="title">桥梁分类</el-row>
      <el-card class="card-div">
        <el-row :gutter="20">
          <el-col :span="12">
            <div id="one-echarts" style="width:100%;height:400px"></div>
          </el-col>
          <el-col :span="12">
            <div id="two-echarts" style="width:100%;height:400px"></div>
          </el-col>
        </el-row>
      </el-card>
      <!-- 城市统计 -->
      <el-row class="title">城市统计</el-row>
      <el-card class="card-div">
        <el-row>
          <div id="three-echarts" style="width:100%;height:600px"></div>
        </el-row>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getEcharts();
  },
  methods: {
    getEcharts() {
      //https://gallery.echartsjs.com/editor.html?c=xOg6hAo710
      //https://gallery.echartsjs.com/editor.html?c=xBJA9aboag
      //https://gallery.echartsjs.com/editor.html?c=xByRVHdlNm
      const oneEcharts = this.echarts.init(
        document.getElementById("one-echarts")
      );
      const Onedata_one = [
        {
          value: 8,
          name: "大桥"
        },
        {
          value: 2,
          name: "拱桥"
        },
        {
          value: 296,
          name: "中桥"
        },
        {
          value: 1170,
          name: "小桥"
        },
        {
          value: 107,
          name: "其他"
        }
      ];
      const OneData_two=["大桥","拱桥","中桥","小桥","其他"]
      const OneData_Color=["#2edfa3", "#bce672", "#ff4777", '#70f3ff', '#4b5cc4']
      const Oneoption = {
        backgroundColor: "#031845",
        color: OneData_Color,
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          top: "20%",
          right: "3%",
          bottom: "10%",
          left: "5%"
        },
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 20,
          x: "center",
          textStyle: {
            color: "#fff"
          },
          data: OneData_two
        },
        series: [
          {
            name: "项目类型",
            type: "pie",
            selectedMode: "single",
            radius: [0, "50%"],
            center: ["50%", "50%"],

            label: {
              normal: {
                show: false,
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontWeight: "normal",
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: Onedata_one
          },
          {
            name: "项目类型",
            type: "pie",
            radius: ["40%", "62%"],
            center: ["50%", "50%"],
            label: {
              normal: {
                formatter: "{b|{b}}\n{hr|}\n{d|{d}%}",
                rich: {
                  b: {
                    fontSize: 15,
                    color: "#fff",
                    align: "left",
                    padding: 4
                  },
                  hr: {
                    borderColor: "#12EABE",
                    width: "100%",
                    borderWidth: 1,
                    height: 0
                  },
                  d: {
                    fontSize: 15,
                    color: "#fff",
                    align: "left",
                    padding: 4
                  },
                  c: {
                    fontSize: 15,
                    color: "#fff",
                    align: "center",
                    padding: 4
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 20,
                lineStyle: {
                  type: "dashed",
                  width: 2
                }
              }
            },
            data: Onedata_one
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      oneEcharts.setOption(Oneoption);

      //https://gallery.echartsjs.com/editor.html?c=xhmv-1o6XS
      const twoEcharts = this.echarts.init(
        document.getElementById("two-echarts")
      );
      const Twodata = [
        "大桥",
        "拱桥",
        "中桥",
        "小桥",
        "其他"
      ];
      const TwoData_one = [8, 2, 296,1170,107];
      const TwoData_two = [1519, 1519, 1519, 1519, 1519];
      const TwoData_three = [1519, 1519, 1519, 1519, 1519];
      const TwoData_for=[0, 0, 0,0,0]
      var twoColor = ["#2edfa3", "#bce672", "#ff4777", '#70f3ff', '#4b5cc4'];
      const TwoOption = {
        backgroundColor: "#0e2147",
        grid: {
          left: "10%",
          top: "12%",
          right: "5%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: Twodata
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: []
          },
          {
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: TwoData_one,
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = twoColor.length;
                  return twoColor[params.dataIndex % num];
                }
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: TwoData_three,
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "#0e2147",
                barBorderRadius: 5
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data: TwoData_two,
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = twoColor.length;
                  return twoColor[params.dataIndex % num];
                },
                barBorderRadius: 5
              }
            },
            z: 0
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: TwoData_for,
            yAxisIndex: 2,
            symbolSize: 15,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = twoColor.length;
                  return twoColor[params.dataIndex % num];
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      };
      twoEcharts.setOption(TwoOption);

      //https://gallery.echartsjs.com/editor.html?c=xFsBq0eHRq
      const threeEcharts = this.echarts.init(
        document.getElementById("three-echarts")
      );
      const ThreeData_one = [
        "常州市",
        "淮安市",
        "连云港市",
        "南京市",
        "南通市",
        "省监狱管理局",
        "省农垦",
        "泰州市",
        "无锡市",
        "宿迁市",
        "徐州市",
        "盐城市",
        "扬州市",
        "镇江市"
      ];
      const ThreeData_tow = [13, 95, 27, 5, 124,5, 9, 63, 4, 82,159,762,125,36];
      const ThreeOption = {
        backgroundColor: "#031845",
        tooltip: {},
        grid: {
          top: "10%",
          right: "3%",
          bottom: "10%",
          left: "5%"
        },
        xAxis: {
          data: ThreeData_one, //横坐标
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            interval: 0,
            rotate: 25,
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: "1  " //坐标线的宽度
            }
          }
        },
        yAxis: {
          name: "项目数",
          nameTextStyle: {
            color: "#fff"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#40A1EA", //网格横线颜色
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 24 //坐标值得具体的颜色
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            show: true, //隐藏y轴刻度
            lineStyle: {
              color: "#FFFFFF"
            }
          }
        },
        series: [
          {
            //name: '威胁值',
            type: "bar",
            barWidth: 70,
            data: ThreeData_tow, //数据
            itemStyle: {
              normal: {
                color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#06B5D7" }, //柱图渐变色
                  { offset: 0.5, color: "#44C0C1" }, //柱图渐变色
                  { offset: 1, color: "#71C8B1" } //柱图渐变色
                ])
              },
              emphasis: {
                color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#71C8B1" }, //柱图高亮渐变色
                  { offset: 0.7, color: "#44C0C1" }, //柱图高亮渐变色
                  { offset: 1, color: "#06B5D7" } //柱图高亮渐变色
                ])
              }
            }
          }
        ]
      };
      threeEcharts.setOption(ThreeOption);
    }
  }
};
</script>

<style scoped>
.bridgeStatistics-div {
  height: 100%;
}
.el-breadcrumb {
  padding-bottom: 10px;
  font-size: 14px;
}
.title {
  color: #fff;
  border-bottom: 1px solid #696969;
  background-color: #001529;
  padding: 10px 0 10px 20px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
}
.el-card {
  background-color: #001529;
}
.card-div {
  border: none;
}
.oneCard-title {
  border: 1px solid #0170c1;
  color: #fff;
  text-align: center;
}
.oneCard-title .one {
  font-size: 22px;
  padding-right: 30px;
  font-weight: bold;
}
.oneCard-title .two {
  font-size: 26px;
  padding-right: 30px;
  font-weight: bold;
  color: #0a8dec;
}
</style>