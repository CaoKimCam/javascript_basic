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

//Promise(chain)
//Promise có 3 trạng thái: pending, fulfilled, rejected
//callback hell: phần trong phải chờ phần ngoài chạy(do cần dữ liệu của cái bên ngoài)
promise
    .then(function(data){
        //resole1 được gọi
        return 1;
    })
    .then(function(data){
        //resole2 được gọi
        console.log(data);
        return 2;
    })
    .catch(function(){
        //reject được gọi
        console.log(data);
        return 3;
    })
    .finally(function(){
        //đều lọt vào finally
    })
//sẽ output 1 2 3 (println)
//-> giải quyết được bài toán callback
//nếu không return ra promise thì nó sẽ chạy then liền kề
//nếu return ra promise: chờ promise được giải quyết mới chạy tiếp
promise
    .then(function(data){
        //resole1 được gọi
        return new Promise(function(resole){
            setTimeout(resole, 3000);
        })
    })
    .then(function(data){
        //resole2 được gọi
        console.log(data);
        return 2;
    })
    .catch(function(){
        //reject được gọi
        console.log(data);
        return 3;
    })
    .finally(function(){
        //đều lọt vào finally
    })

    function sleep(ms){
        return new Promise(function(resole){
            setTimeout(resole,ms);
        })
    }

    sleep(1000)
        .then(function(){
            console.log(1);
            return sleep(1000);
        })
        .then(function(){
            console.log(2)
            return sleep(1000);
        })