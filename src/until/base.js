let base = {
    warn(a, b) {
        a.$message({
            type: "error",
            message: b
        });
    },
    suc(a, b) {
        a.$message({
            type: 'success',
            message: b
        })
    },
    Noti(a, msg) {
        a.$notify({
            title: "系统提示",
            message: msg,
            type: "success"
        });
    },
    SetTitle(v) {
        var title = document.querySelector('title')
        title.text = v
    },
    AddStyle(obj) {
        console.log(obj);
        obj = obj.replace(/;/g, '!important;')
        let style = document.querySelector('style')
        let head = document.querySelector('head')
        if (style) {
            style.append(obj)
        } else {
            let style = '<style></style>'
            head.append(style)
            style.innerHtml = obj
        }
    },
    // 分页器  (每页条数，当前页)
    ChangePage(page_size, current_page, data) {
        page_size = page_size || 10
        let start = page_size * (current_page - 1)
        let end = page_size * (current_page - 1) + page_size
        return data.slice(start, end)
    },
    GetTime() {
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var date = new Date().getDate()
        var h = new Date().getHours();
        month = month < 10 ? ('0' + month) : month
        date = date < 10 ? ('0' + date) : date
        h = h < 10 ? ("0" + h) : h;
        var m = new Date().getMinutes();
        m = m < 10 ? ("0" + m) : m;
        var s = new Date().getSeconds();
        s = s < 10 ? ("0" + s) : s;
        let time = `${year}-${month}-${date}`
        console.log(time);
        return time
    },
    Obj_arr(obj) {//对象转数组
        obj = obj || { age: 18, name: 'wang' }
        const arr = function () {
            let arr1 = []
            for (var n in obj) {
                arr1.push({ name: n, value: obj[n] })
            }
            return arr1
        }
        return arr()
    }
}
export default base