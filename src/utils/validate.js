export  function testPhone(value){
    return new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(value)
}
export  function testEmail(value){
    return new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(value)
}
// 判断是否包含数字和英文
export  function testPassword(value){
    return new RegExp(/[a-zA-Z]+/).test(value)&&new RegExp(/\d+/).test(value)
}
// 判断是否是六位验证码
export  function testCheck(value){
    return new RegExp(/[0-9a-zA-Z]{6}/).test(value)
}