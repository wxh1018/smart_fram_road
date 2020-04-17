<template>
    <div class="Artificialfill">
        <div class="Artificialfillcenter">
            <ul>
                <li class="importantli">
                    <b>基本信息</b>
                    <ol>
                        <li><v-distpicker :province="this.province" @selected="onChangeselected"></v-distpicker></li>
                        <li><img src="../../../assets/图标.png" alt="">序号：<input type="text" v-model="no" placeholder="请输入序号" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">公路编号：<input type="text" v-model="roadNo" placeholder="请输入公路编号" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">技术等级：
                            <el-select v-model="skillLevel" placeholder="请选择">
                                <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">方向：
                            <el-select v-model="direction" placeholder="请选择">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">桩号起点：<input type="text" v-model="pileNo" placeholder="请输入桩号起点" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">桩号终点：<input type="text" v-model="pileEnd" placeholder="请输入桩号终点" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">隐患里程：<input type="text" v-model="hiddenMileage" placeholder="请输入隐患里程" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">排查时间：<input type="text" v-model="currenttime"  disabled="disabled" class="Artificialfillinput"></li>
                        <li><img src="../../../assets/图标.png" alt="">路段分类：
                            <el-select v-model="roadClassification" placeholder="请选择">
                                <el-option
                                    v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">交通事故排查：
                            <el-select v-model="accidentScreen" placeholder="请选择">
                                <el-option
                                    v-for="item in options4"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">交通事故风险：
                            <el-select v-model="accidentRisk" placeholder="请选择">
                                <el-option
                                    v-for="item in options5"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">公路条件排查：
                            <el-select v-model="conditionsScreening" placeholder="请选择">
                                <el-option
                                    v-for="item in options6"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">公路风险等级：
                            <el-select v-model="riskLevel" placeholder="请选择">
                                <el-option
                                    v-for="item in options7"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li></li>
                    </ol>
                </li>
                <li class="importantli">
                    <b>公路条件信息</b>
                    <ol>
                        <li><img src="../../../assets/图标.png" alt="">小半径圆曲线：
                            <el-select v-model="smallRadius" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">连续下坡：
                            <el-select v-model="longDescent" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">陡坡：
                            <el-select v-model="steepSlope" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">视距不良：
                            <el-select v-model="poorVisibility" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">路测险要：
                            <el-select v-model="roadsideIt" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">环境复杂：
                            <el-select v-model="environmentalComplex" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">交叉口不规范：
                            <el-select v-model="intersectionStandard" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">交通量：
                            <input type="text" v-model="volumeTraffic" placeholder="请输入交通量" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">通行校车或班车：
                            <el-select v-model="busPass" placeholder="请选择">
                                <el-option
                                    v-for="item in options8"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">运行车速或路段限速：
                            <input type="text" v-model="runSpeed" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li></li>
                        <li></li>
                    </ol>
                </li>
                <li class="importantli">
                    <b>路段既有安全设施信息</b>
                    <ol>
                        <li><img src="../../../assets/图标.png" alt="">护栏：
                            <el-select v-model="guardBar" placeholder="请选择">
                                <el-option
                                    v-for="item in options9"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">标志标线：
                            <el-select v-model="markLine" placeholder="请选择">
                                <el-option
                                    v-for="item in options9"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">警示和视线诱导设施：
                            <el-select v-model="caution" placeholder="请选择">
                                <el-option
                                    v-for="item in options9"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">其他：
                            <input type="text" v-model="rest" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li></li>
                        <li></li>
                    </ol>
                </li>
                <li class="importantli">
                    <b>拟新采取的处理措施</b>
                    <ol>
                        <li><img src="../../../assets/图标.png" alt="">涉及路线参数调整的工程：
                            <input type="text" v-model="parameterTuning" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">边坡或边沟环境整治：
                            <input type="text" v-model="environmentRenovation" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">标志标线处置：
                            <input type="text" v-model="markDisposal" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">交叉口综合处置：
                            <input type="text" v-model="intersectionDisposal" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">加装护栏：
                            <input type="text" v-model="addGuardrail" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">警示诱导设施处理：
                            <input type="text" v-model="warningDisposal" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">其他：
                            <input type="text" v-model="otherDisposal" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">处置投资估算：
                            <input type="text" v-model="disposalInvestment" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">计划实施安防工程年份：
                            <el-date-picker
                                v-model="year"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </li>
                    </ol>
                </li>
                <li class="importantli">
                    <b>录入详细信息</b>
                    <ol>
                        <li><img src="../../../assets/图标.png" alt="">图片IP：
                            <el-upload
                                class="upload-demo"
                                action="http://www.free-http.svipss.top/upload/add"
                                :file-list="fileList"
                                :on-success="handsuccess">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">录入人员：
                            <input type="text" v-model="person" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">手机号：
                            <input type="text" v-model="phone" placeholder="请输入" class="Artificialfillinput">
                        </li>
                        <li><img src="../../../assets/图标.png" alt="">录入时间：
                            <input type="text" v-model="currenttime"  disabled="disabled" class="Artificialfillinput">
                        </li>
                        <li><el-button type="primary" round @click="updateoption()">确认提交</el-button></li>
                        <li></li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
    components: { VDistpicker },
    data() {
        return {
            // 默认省份
            province:"江苏省",
            options1:[
                {
                value: '一级',
                label: '一级'
                },{
                value: '二级',
                label: '二级'
                }
            ],
            options2:[
                {
                value: '桩号大到小',
                label: '桩号大到小'
                },{
                value: '桩号小到大',
                label: '桩号小到大'
                }
            ],
            options3:[
                {
                value: 'A',
                label: 'A'
                },{
                value: 'B',
                label: 'B'
                },{
                value: 'C',
                label: 'C'
                }
            ],
            options4:[
                {
                value: '事故风险评估',
                label: '事故风险评估'
                },{
                value: '事故多发点段识别',
                label: '事故多发点段识别'
                }
            ],
            options5:[
                {
                value: '1',
                label: '1'
                },{
                value: '2',
                label: '2'
                },{
                value: '3',
                label: '3'
                }
            ],
            options6:[
                {
                value: '公路风险评估',
                label: '公路风险评估'
                },{
                value: '公路条件识别',
                label: '公路条件识别'
                }
            ],
            options7:[
                {
                value: '1',
                label: '1'
                },{
                value: '2',
                label: '2'
                },{
                value: '3',
                label: '3'
                }
            ],
            options8:[
                {
                value: '是',
                label: '是'
                },{
                value: '否',
                label: '否'
                }
            ],
            options9:[
                {
                value: '有',
                label: '有'
                },{
                value: '无',
                label: '无'
                }
            ],
            // 省市
            shengshi:"",
            // 区
            qu:"",
            no:"",
            roadNo:"",
            skillLevel:"",
            direction:"",
            pileNo:"",
            pileEnd:"",
            hiddenMileage:"",
            accidentScreen:"",
            // 排查时间
            currenttime:"",
            roadClassification:"",
            accidentRisk:"",
            conditionsScreening:"",
            riskLevel:"",
            smallRadius:"",
            longDescent:"",
            steepSlope:"",
            poorVisibility:"",
            roadsideIt:"",
            environmentalComplex:"",
            intersectionStandard:"",
            volumeTraffic:"",
            busPass:"",
            runSpeed:"",
            guardBar:"",
            markLine:"",
            caution:"",
            rest:"",
            parameterTuning:"",
            environmentRenovation:"",
            markDisposal:"",
            intersectionDisposal:"",
            addGuardrail:"",
            warningDisposal:"",
            otherDisposal:"",
            disposalInvestment:"",
            // 工程年份
            year:"",
            // 转换后时间
            changeyear:"",
            // 传入后台Imgurl
            imgurl:"",
            // 上传图片数组
            fileList: [],
            person:"",
            phone:"",
        }
    },
    methods: {
        // 获取当前时间
        nowtime(){
            var date = new Date();
            var month = (date.getMonth() + 1)
            if(month <10){
                month= '0' + (date.getMonth() + 1)
            }
            var day = date.getDate()
            if(day <10){
                day= '0' + (date.getDate() + 1)
            }
            var date_value = date.getFullYear() + "-" + month + "-" + day
            this.currenttime = date_value
        },
        // 上传点击事件
        handsuccess(file, fileList) {
            this.fileList.push(fileList);
            this.imgurl = "http://" + fileList.response
        },
        // 地区选择
        onChangeselected(a){
            this.shengshi = a.province.value+"-"+a.city.value
            this.qu = a.area.value
        },
        // 确认提交按钮
        updateoption(){
            // 转换时间
            var date = new Date(this.year);
            var month = (date.getMonth() + 1)
            if(month <10){
                month= '0' + (date.getMonth() + 1)
            }
            var day = date.getDate()
            if(day <10){
                day= '0' + (date.getDate() + 1)
            }
            var date_value = date.getFullYear() + "/" + month + "/" + day
            this.changeyear = date_value

            this.$axios.post("http://www.free-http.svipss.top/safety/insert",{
                no:this.no,
                city:this.shengshi,
                county:this.qu,
                roadNo:this.roadNo,
                skillLevel:this.skillLevel,
                direction:this.direction,
                pileNo:this.pileNo,
                pileEnd:this.pileEnd,
                hiddenMileage:this.hiddenMileage,
                screenTime:this.currenttime,
                roadClassification:this.roadClassification,
                accidentScreen:this.accidentScreen,
                accidentRisk:this.accidentRisk,
                conditionsScreening:this.conditionsScreening,
                riskLevel:this.riskLevel,
                smallRadius:this.smallRadius,
                longDescent:this.longDescent,
                steepSlope:this.steepSlope,
                poorVisibility:this.poorVisibility,
                roadsideIt:this.roadsideIt,
                environmentalComplex:this.environmentalComplex,
                intersectionStandard:this.intersectionStandard,
                volumeTraffic:this.volumeTraffic,
                busPass:this.busPass,
                runSpeed:this.runSpeed,
                guardBar:this.guardBar,
                markLine:this.markLine,
                caution:this.caution,
                rest:this.rest,
                parameterTuning:this.parameterTuning,
                environmentRenovation:this.environmentRenovation,
                markDisposal:this.markDisposal,
                intersectionDisposal:this.intersectionDisposal,
                addGuardrail:this.addGuardrail,
                warningDisposal:this.warningDisposal,
                otherDisposal:this.otherDisposal,
                disposalInvestment:this.disposalInvestment,
                yearEngineering:this.changeyear,
                image:this.imgurl,
                person:this.person,
                phone:this.phone,
                date:this.currenttime,
            }).then(res=>{
                if(res.data.msg == "OK"){
                    this.$message({
                        message: '填报成功',
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: '填报失败',
                        type: 'error'
                    });
                }
                setTimeout(function(){
                    location.reload()
                },1000)
            })
        }
    },
    mounted () {
        // 获取当前时间
        this.nowtime()
    },
}
</script>

<style>
.el-input__suffix{
    display: none!important;
}
.el-drawer__header>:first-child{
    outline: none!important;
}
.Artificialfill{
    width: 100%;
    height: 100%;
    position: relative;
}
.Artificialfillcenter{
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
}
.Artificialfillcenter::-webkit-scrollbar{
  width: 5px;
}
.Artificialfillcenter::-webkit-scrollbar-thumb{
  background-color: #d0e9ec;
}
.Artificialfillcenter ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.importantli{
    border-bottom: 1px solid #47a0aa;
    border-top: 1px solid #47a0aa;
    width: 99%;
    height: 290px;
    margin-bottom: 1%;
}
.Artificialfillcenter ul li b{
    display: inline-block;
    color: white;
    width: 100%;
    height: 10%;
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 2px black;
}
.Artificialfillcenter ul li ol{
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.Artificialfillcenter ul li ol li{
    width: 33%;
    height: 18%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    color: white;
    font-size: 16px;
}
.Artificialfillcenter ul li ol li input{
    background: none;
    border: none;
    border-bottom: 1px solid #fff!important;
    text-align: center;
    color: #00e1fd;
}
.Artificialfillinput{
    width: 49%;
    height: 80%;
    /* border-radius: 20px; */
    outline: none;
}
.Artificialfillcenter ul li ol li input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color: #00e1fd!important;
    font-size: 14px;
}
.Artificialfillcenter ul li ol li img{
    width: 4%;
    height: 38%;
    margin-right: 1%;
}
.upload-demo{
    width: 80%;
}
</style>