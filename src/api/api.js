import * as Api from './index'



//项目一


// http://www.free-http.svipss.top/admin/login
export const login = (params)=>Api.Post('/admin/login' ,params)

// 查询全部数据
export const total_data = (params) => Api.Post('/road/queryAll', params)



export const detail_msg = (params) => Api.Post('/road/queryId', params)

// 月报查询
// http://www.free-http.svipss.top/monthly/queryMonthly 传项目id
export const Inquire_mon = (params) => Api.Post('/monthly/queryMonthly', params)

// 月报详情
// http://www.free-http.svipss.top/monthly/queryMonthlyId 传月报id
export const Inquire_mon_detail = (params) => Api.Post('/monthly/queryMonthlyId', params)

// 月报修改
// http://www.free-http.svipss.top/monthly/saveAndUpdate 保存或者更新数据，有月报id就是修改，没有就是新增月报
export const Modify_mon = (params)=>Api.Post('/monthly/saveAndUpdate' ,params)

// 总项目增加
// http://www.free-http.svipss.top/road/insert
export const Add_pro = (params)=>Api.Post('/road/insert',params)

// 月报增加按钮
// http://www.free-http.svipss.top/monthly/saveAndUpdate
export const Add_month = (params)=>Api.Post('/monthly/saveAndUpdate',params)


// 总项目修改
// http://www.free-http.svipss.top
export const Total_modify = (params)=>Api.Post('/road/update',params)




// /monthly/queryAll查询全部月报
export const All_month = (params)=>Api.Post('/monthly/queryAll',params)

// 月报删除
export const Del_month = (params)=>Api.Post('/monthly/delOne',params)

