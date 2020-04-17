<template>
    <div class="updatedialog">
        <div class="updatedialogoption">
            <div class="fiestdiv">
                <b>基本信息</b>
                <ul>
                    <li><img src="../../../assets/图标.png" alt="">序号：<span>{{this.tabledata.id}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">市县：<span>{{this.tabledata.city + this.tabledata.county}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">公路编号：<span>{{this.tabledata.roadNo}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">技术等级：<span>{{this.tabledata.skillLevel}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">方向：<span>{{this.tabledata.direction}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">桩号起点：<span>{{this.tabledata.pileNo}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">桩号终点：<span>{{this.tabledata.pileEnd}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">隐患里程：<span>{{this.tabledata.hiddenMileage}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">排查时间：<span>{{this.tabledata.screenTime}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">路段分类：<span>{{this.tabledata.roadClassification}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">交通事故排查：<span>{{this.tabledata.accidentScreen}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">交通事故风险：<span>{{this.tabledata.accidentRisk}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">公路条件排查：<span>{{this.tabledata.conditionsScreening}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">公路风险等级：<span>{{this.tabledata.riskLevel}}</span></li>
                    <li></li>                    
                </ul>
            </div>
            <div class="fiestdiv">
                 <b>公路条件信息</b>
                 <ul>
                     <li><img src="../../../assets/图标.png" alt="">小半径圆曲线：<span>{{this.tabledata.smallRadius}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">连续下坡：<span>{{this.tabledata.longDescent}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">陡坡：<span>{{this.tabledata.steepSlope}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">视距不良：<span>{{this.tabledata.poorVisibility}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">路测险要：<span>{{this.tabledata.roadsideIt}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">环境复杂：<span>{{this.tabledata.environmentalComplex}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">交叉口不规范：<span>{{this.tabledata.intersectionStandard}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">交通量：<span>{{this.tabledata.volumeTraffic}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">通行校车或班车：<span>{{this.tabledata.busPass}}</span></li>
                     <li><img src="../../../assets/图标.png" alt="">运行车速或路段限速：<span>{{this.tabledata.runSpeed}}</span></li>
                     <li></li>
                     <li></li>
                 </ul>
            </div>
            <div class="seconddiv">
                <b>路段既有安全设施信息</b>
                <ul>
                    <li><img src="../../../assets/图标.png" alt="">护栏：<span>{{this.tabledata.guardBar}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">标志标线：<span>{{this.tabledata.markLine}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">警示和视线诱导设施：<span>{{this.tabledata.caution}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">其他：<span>{{this.tabledata.rest}}</span></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="seconddiv">
                <b>拟新采取的处理措施</b>
                <ul>
                    <li><img src="../../../assets/图标.png" alt="">涉及路线参数调整的工程：<span>{{this.tabledata.parameterTuning}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">边坡或边沟环境整治：<span>{{this.tabledata.environmentRenovation}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">标志标线处置：<span>{{this.tabledata.markDisposal}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">交叉口综合处置：<span>{{this.tabledata.intersectionDisposal}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">加装护栏：<span>{{this.tabledata.addGuardrail}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">警示诱导设施处理：<span>{{this.tabledata.warningDisposal}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">其他：<span>{{this.tabledata.otherDisposal}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">处置投资估算：<span>{{this.tabledata.disposalInvestment}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">计划实施年份：<span>{{this.tabledata.yearEngineering}}</span></li>
                </ul>
            </div>
            <div class="seconddiv">
                <b>录入详细信息</b>
                <ul>
                    <li><img src="../../../assets/图标.png" alt="">录入人员：<span>{{this.tabledata.person}}</span></li>
                    <li><img src="../../../assets/图标.png" alt="">手机号：<span>{{this.tabledata.phone}}</span></li>
                    <li class="timeli"><img src="../../../assets/图标.png" alt="">录入时间：<span>{{this.tabledata.date}}</span></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:['message'],
    data() {
        return {
            id:"",
            tabledata:{},
            qidian:[],
            zhongdian:[],
            zuobiao:[],
        }
    },
    methods: {
      //默认数据 
      updatedialog(){
        this.id = this.message
        this.$axios.post("http://www.free-http.svipss.top/safety/queryId",{
            id:this.id
        }).then(res=>{
            if(res.data[0]){
                this.qidian = []
                this.zhongdian = []
                this.zuobiao = []
                if(res.data[0].noCoordinate && res.data[0].endCoordinate){
                    var qidian = res.data[0].noCoordinate.split(",")
                    this.qidian = qidian
                    var zhongdian = res.data[0].endCoordinate.split(",")
                    this.zhongdian = zhongdian
                    this.zuobiao.push(this.qidian,this.zhongdian)
                    this.map()
                }else{
                    this.zuobiao = []
                    this.zhongdian = []
                    this.qidian = []
                }
                this.tabledata=res.data[0]
            }
        })
      },
    },
    mounted () {
        this.updatedialog()
    },
    watch: {
        message(v){
            this.id = v
            this.updatedialog()
        },
    }
}
</script>

<style>
#map{
	width:100%;
	height: 100%;
}
.amap-logo {
    display: none!important;
} 
.el-drawer__header>:first-child{
    outline: none!important;
}
.updatedialog{
    width: 100%;
    height: 100%;
}
.updatedialogoption{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.updatedialogoption::-webkit-scrollbar{
  width: 5px;
}
.updatedialogoption::-webkit-scrollbar-thumb{
  background-color: #d0e9ec;
}
.fiestdiv{
    width: 100%;
    height: 40%;
    border-top: 1px solid #47a0aa;
    border-bottom: 1px solid #47a0aa;
}
.fiestdiv b{
    display: inline-block;
    width: 100%;
    height: 20%;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-shadow: 0px 0px 3px black;
}
.fiestdiv ul{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.fiestdiv ul li{
    width: 32%;
    height: 18%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 17px;
}
.fiestdiv ul li img{
    width:6%;
    height: 47%;
    margin-right: 2%;
}
.fiestdiv ul li span{
    color: rgb(167, 214, 233);
}
.seconddiv{
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #47a0aa;
}
.seconddiv b{
    display: inline-block;
    width: 100%;
    height: 20%;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-shadow: 0px 0px 3px black;
}
.seconddiv ul{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.seconddiv ul li{
    width: 32%;
    height: 18%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 17px;
}
.seconddiv ul li img{
    width: 6%;
    height: 60%;
    margin-right: 2%;
}
.seconddiv ul li span{
    color: rgb(167, 214, 233);
}
.imagebox{
    width: 100%;
    height: 80%;
    overflow: auto;
}
.imagebox ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.imagebox ul li{
    width: 22%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imagebox img{
    width: 90%;
    height: 90%;
}
.imagebox::-webkit-scrollbar{
  width: 5px;
}
.imagebox::-webkit-scrollbar-thumb{
  background-color: #d0e9ec;
}
.lastdiv{
    width: 100%;
    height: 50%;
    border-top: 1px solid #47a0aa;
}
</style>