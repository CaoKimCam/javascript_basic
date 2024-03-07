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

//Promise(sync, async)
// Sync

// async: setTimeout, setInterval, fetch, XMLHttpRequest,
//request animation frame
//khi nào các ... trên xong, javascript đều cung cấp để biết
setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

//Promise(pain)

/**
 * Promise có 3 trạng thái:
Pending
Fulfilled
Rejected
 */
//Callback hell: khi sử dụng callback
//Pyramid of doom: code đi vào bế tắt
setTimeout(function(){
    console.log(1);//viec 1
    setTimeout(function(){
        console.log(2);//viec 2
        setTimeout(function(){
            console.log(1);//viec 3
            setTimeout(function(){
                console.log(1);//viec 4
            },1000)
        },1000)
    },1000)
},1000)//output: 1,2,3,4

//Promise(concept)

var promise = new Promise(
    //Executor
    function(resole, reject){
    //Logic
    //thành công: resolve()
    //thất bại: reject()

    // Fake call API
    resole();
});
//giải quyết callback hell
promise
    .then(function(){
        //resole được gọi
    })
    .catch(function(){
        //reject được gọi
    })
    .finally(function(){
        //đều lọt vào finally
    })

//xử lý bất đồng bộ, khắc phục callback hell
//new Promise, trong constructor truyền executor function nhận 2 tham số: resole, reject dạng hàm
//resole thành công, reject khi thất bại
//đối tượng promise được tạo ra, dùng .then .catch (đều nhận những callback function)
//.then khi thành công, .catch khi thất bại
