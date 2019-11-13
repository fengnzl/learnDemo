// 日期格式转换  并将此方法挂载在原型上
Date.prototype.format = function fmt(fmt) {
  var dateObj = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 天数
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth()+3)/3),
    "S": this.getMilliseconds() // 毫秒
  }

  // 如果替换的格式有年的字段，则将年份正则替换为想要的格式
  if (/(y+)/.test(fmt)) {
    // RegExp.$1代表匹配的第一个元素  如 /(\w+)\s(\w+)/.test('hello world')  则RegExp.$1 = hello RegExp.$2 = world 
    fmt = fmt.replace(RegExp.$1, (this.getFullYear()+ '').substr(4 - RegExp.$1.length))
  }

  // 将对象中属性进行匹配替换  毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
  for (var i in dateObj) {
    if (new RegExp("(" + i + ")").test(fmt)) {
      let replaceStr =  RegExp.$1.length == 1 ? dateObj[i]: ('00'+dateObj[i]).substr((''+dateObj[i]).length)
      fmt= fmt.replace(RegExp.$1, replaceStr)
    }
  }
  return fmt
}
let date = new Date()
console.log(date.format('yyyy-MM-dd hh:mm:ss')) //2019-09-25 15:54:56
console.log(date.format('yyyy年MM月dd日')) //2019年09月25日
console.log(date.format('yyyy年MM月dd日hh小时mm分ss秒')) // 2019年09月25日16小时05分09秒
console.log(date.format('MM/dd/yyyy')) // 09/25/2019