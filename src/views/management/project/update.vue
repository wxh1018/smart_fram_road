<template>
    <div class="update">
        <!-- 面包屑 -->
        <div class="mianbao">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>建设项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 中部主要 -->
        <div class="updatemain">
            <!-- 左部 -->
            <div class="updatemainleft">
                <!-- 头部选择 -->
                <div class="updatemaintop">
                    <ul>
                        <li>
                            <el-input placeholder="江苏省" class="updatemaintopimput" disabled></el-input>
                        </li>
                        <li>
                            <el-select v-model="value1" placeholder="选择市" class="updatemaintopimput" @change="countyoptionchange()">
                                <el-option
                                v-for="item in value1option"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <el-select v-model="value2" placeholder="选择区" class="updatemaintopimput" @change="bianhaochange()">
                                <el-option
                                v-for="item in value2option"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <el-select v-model="value3" placeholder="公路编号" class="updatemaintopimput" @change="timerchange()">
                                <el-option
                                v-for="item in value3option"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </div>
                <!-- 底部表格 -->
                <div class="updatemainbottom">
                    <table border="1" class="updatemainbottomtable">
                        <tr>
                            <th>所属地区</th>
                            <th>公路编号</th>
                            <th>排查时间</th>
                            <th>路段分类</th>
                        </tr>
                        <tr :class="changeColor(item.roadClassification)" v-for="(item,index) in defulttabledata" :key="index">
                            <td @click="detail(item.id,index)">{{item.city + item.county}}</td>
                            <td @click="detail(item.id,index)">{{item.roadNo}}</td>
                            <td @click="detail(item.id,index)">{{item.screenTime}}</td>
                            <td @click="detail(item.id,index)">{{item.roadClassification}}</td>
                        </tr>
                    </table>
                </div>
                <!-- 分页 -->
                <div class="Pagination">
                    <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    :total="this.total"
                    layout="prev, pager, next">
                    </el-pagination>
                </div>
            </div>
            <!-- 右部 -->
            <div class="updatemainright">
                <!-- 添加 -->
                <div class="updatemainrightupdate">
                    <!-- <ol>
                        <li><el-button type="primary" round class="updatemaintopbutton" @click="ArtificialfilldialogVisible = true">人工填报</el-button></li>
                        <li><el-button type="primary" round class="updatemaintopbutton" @click="dataimportingdialogVisible = true">数据导入</el-button></li>
                    </ol> -->
                </div>
                <!-- 详情数据 -->
                <div class="updatemainrightdetail"
                    v-loading="loading"
                    element-loading-text="数据查询中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <updatedialog :message="emit"></updatedialog>
                </div>
            </div>
        </div>

        <!-- 数据导入弹窗 -->
        <el-dialog
            title="数据导入"
            :visible.sync="dataimportingdialogVisible">
            <el-upload
                action="http://www.free-http.svipss.top/safety/import"
                :file-list="fileList"
                :before-upload="beforeUploadFile"
                :on-success="handsuccess">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
        </el-dialog>

        <!-- 人工填报弹窗 -->
        <el-drawer
            title="人工填报"
            direction='ltr'
            :visible.sync="ArtificialfilldialogVisible">
            <Artificialfill></Artificialfill>
        </el-drawer>
    </div>
</template>

<script>
import $ from 'jquery'
  import updatedialog from './updatedialog.vue'
  import Artificialfill from './Artificialfill.vue'
  export default {
    components: {
        updatedialog:updatedialog,
        Artificialfill:Artificialfill
    },
    data() {
      return {
        loading: false,
        dataimportingdialogVisible:false,
        ArtificialfilldialogVisible:false,

        value1: '',
        value2: '',
        value3: '',
        // 选择市
        value1option:[],
        // 选择区
        value2option:[],
        // 选择公路编号
        value3option:[],

        // 默认所有数据
        defulttabledata:[],
        // 数据导入
        fileList:[],
        // 传参
        emit:"",
        // 分页总页数
        total:1,
      }
    },
    methods: {
        // td颜色
        changeColor(v){
            if(v){
                if(v.trim() == "A"){
                    var b = "a"
                }else{
                    var b = "b"
                }
                return b
            }
        },
        // 查询所有数据
        defultoption(){
            this.$axios.post("http://www.free-http.svipss.top/safety/findAll",{
                pageSize:"1"
            }).then(res=>{
                // 分页总页数
                this.total = (res.data.pages)*10
                // 总数据
                this.defulttabledata = res.data.records
                // 首次默认数据
                this.detail(res.data.records[0].id)
            })
        },
        // 数据上传input
        handsuccess(res, file, fileList) {
            this.fileList = fileList.slice(-3);
            if(res == "excel文件数据导入成功!"){
                this.$message({
                    message: '导入成功',
                    type: 'success'
                });
            }
            this.dataimportingdialogVisible = false
            this.defultoption()
        },
        // 判断是否为excl文件
        beforeUploadFile(file) {
            let extension = file.name.substring(file.name.lastIndexOf('.')+1);
            if(extension !== 'xlsx') {
                this.$message.warning('只能上传后缀是.xlsx的文件');
                this.fileList = []
            }
        },
        // 点击跳分页
        handleCurrentChange(value){
            $('tr').removeClass('red')
            
            if(this.value1 == ""){
                this.$axios.post("http://www.free-http.svipss.top/safety/findAll",{
                    pageSize:value
                }).then(res=>{
                    // 总数据
                    this.defulttabledata = res.data.records
                })
            }else if(this.value1 !=="" && this.value2 =="" && this.value3 == ""){
                this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                    city:this.value1,
                    pageSize:value
                }).then(res=>{
                    // 总数据
                    this.defulttabledata = res.data.records
                })
            }else if(this.value1 !=="" && this.value2 !=="" && this.value3 == ""){
                this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                    city:this.value1,
                    county:this.value2,
                    pageSize:value
                }).then(res=>{
                    // 总数据
                    this.defulttabledata = res.data.records
                })
            }else if(this.value1 !=="" && this.value2 !=="" && this.value3 !== ""){
                this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                    city:this.value1,
                    county:this.value2,
                    roadNo:this.value3,
                    pageSize:value
                }).then(res=>{
                    // 总数据
                    this.defulttabledata = res.data.records
                })
            }
        },
        // 查询单个项目详情
        detail(id,index){
            this.loading = true;
            setTimeout(() => {
            this.loading = false;
            }, 500)
            
            $('tr').eq(index+1).addClass('red').siblings().removeClass('red')
            this.emit = id
        },


        // 默认查询市数组
        city(){
            this.$axios.post("http://www.free-http.svipss.top/safety/findCity",{
            }).then(res=>{
                this.value1option = res.data
            })
        },
        // 选择市change事件
        countyoptionchange(){
            this.total = 1
            this.value2option = []
            this.value2 = ""
            this.value3option = []
            this.value3 = ""
            this.defulttabledata = []
            // 区数组
            this.$axios.post("http://www.free-http.svipss.top/safety/findCounty",{
                city:this.value1
            }).then(res=>{
                this.value2option = res.data
            })

            // 查询市相关数据
            this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                city:this.value1,
                pageSize:"1"
            }).then(res=>{
                // 分页总页数
                this.total = (res.data.pages)*10
                // 总数据
                this.defulttabledata = res.data.records
            })
        },
        // 选择区change事件
        bianhaochange(){
            this.total = 1
            this.value3option = []
            this.value3 = ""
            this.defulttabledata = []
            // 公路编号数组
            this.$axios.post("http://www.free-http.svipss.top/safety/findRoadNo",{
                county:this.value2,
            }).then(res=>{
                this.value3option = res.data
            })

            // 查询区相关数据
            this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                city:this.value1,
                county:this.value2,
                pageSize:"1"
            }).then(res=>{
                // 分页总页数
                this.total = (res.data.pages)*10
                // 总数据
                this.defulttabledata = res.data.records
            })
        },
        // 公路编号change事件
        timerchange(){
            this.total = 1
            // 查询公路编号相关数据
            this.$axios.post("http://www.free-http.svipss.top/safety/findMue",{
                city:this.value1,
                county:this.value2,
                roadNo:this.value3,
                pageSize:"1"
            }).then(res=>{
                // 分页总页数
                this.total = (res.data.pages)*10
                // 总数据
                this.defulttabledata = res.data.records
            })
        },
    },
    mounted () {
        this.defultoption()
        // 默认查询市
        this.city()
    }
  }
</script>

<style>
.a{
    background: #a53d32
}
.b{
    background: #bd9a46
}
.red{
    background: #042f35;
}
li{
    list-style: none;
}
.el-dialog{
    background: #094e57!important;
    border: 2px solid #07e4e4!important;
}
.el-dialog__title{
    color: white!important;
}
.el-upload-list__item-name{
    color: white!important;
}
.el-upload-list__item-name:hover{
    color: black!important;
}
.el-drawer__header{
    color: white!important;
}
.el-drawer.ltr{
    background: #094e57!important;
    width: 90%!important;
}
.update{
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px #4eb0bd;
    border-left: 1px solid #4eb0bd;
    box-sizing: border-box;
}
.mianbao{
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background: #6d7d80;
}
.el-breadcrumb__inner{
    color: white!important;
}
.updatemain{
    width: 100%;
    height: 95%;
    display: flex;
}
.updatemainleft{
    width: 40%;
    height: 100%;
}
.updatemainright{
    width: 60%;
    height: 100%;
    background:#4e5c69;
}
.updatemaintop{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    background: #545c64;
}
.updatemainrightupdate{
    width: 100%;
    height: 8%;
    background: #545c64;
    display: flex;
    justify-content: flex-end;
}
.updatemainrightupdate ol{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.updatemainrightupdate ol li{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.updatemaintopbutton{
    border: 1px solid #5fb3be!important;
}
.el-button{
    background: #088898!important;
    border: none;
    color: white!important;
}
.el-button:hover{
    background: #74b4bd!important;
}
.updatemaintop ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.updatemaintop ul li{
    width: 24%;
    height: 100%;
    display: flex;
    align-items: center;
}
.updatemaintopimput{
    width: 100%;
}
.el-input__inner{
    color: white!important;
    text-align: center!important;
    background: none!important;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color: #fff!important;
    text-align: center; 
}
.updatemainbottom{
    width: 100%;
    height: 87%;
    overflow: auto;
    background: #545c64;
}
.updatemainbottom::-webkit-scrollbar{
    width: 5px;
}
.updatemainbottom::-webkit-scrollbar-thumb{
    background-color: #d0e9ec;
}
.updatemainbottomtable{
    width: 100%;
    height: 99%;
    text-align: center;
    border: 1px solid #74b4bd;
}
.updatemainbottomtable tr th{
    height: 45px;
    color: white;
    font-size: 17px;
}
.updatemainbottomtable tr td{
    font-size: 15px;
    color: #e5edee;
}
.updatemainbottomtable tr:hover{
    background: #042f35;
}
.updatemainbottomtable tr:hover th{
    background: #094e57;
}
.Pagination{
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #bd9a46;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #3296a3!important;
}
.libutton{
    width: 100%;
    height: 100%;
    border: none;
    background: #74b4bd;
    color: #0c434b;
    font-weight: 550;
}
.libutton:hover{
    background: #07788a;
    color: white;
}
/* 详情数据css */
.updatemainrightdetail{
    width: 100%;
    height: 92%;
}
</style>