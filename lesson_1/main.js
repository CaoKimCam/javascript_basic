//JSON là gì?
// 1. là 1 định dạng dữ liệu (chuỗi)
// 2, Javascript object notation
// JSON: Number, boolean, null, array, object, string

// Mã hoá/ giải mã
// encode/decode
// Stringgify: từ javascript types->JSON
// Parse: từ JSON -> javascript types

var json ='1';
var json ='true';
var json ='null';
var json ='"abcc"';
var json ='["Javascript", "PHP"]';
var json='{"name":"Son dang", "age":18}'

var a='1';
JSON.parse(a);
JSON.stringify(true);//chuyển thành chuỗi
