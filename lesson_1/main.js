//Promise methods (resolve, reject, all)

//nếu return Promise chức năng reject giữa đường -> bị lỗi (nếu không có .catch)-> nó không chạy các then còn lại
//có catch thì nó sẽ lọt vào catch và không đi qua các then còn lại

// 1.Promise.resolve
// 1.Promise.reject
// 1.Promise.all

var promise= new Promise(
    function(resolve, reject){

})

promise
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){

    })
//nếu 
var promise=Promise.resolve('resolve');//nó sẽ luôn nhảy vào then: luôn thành công
//callback hell: logic bị phù thuộc vào nhau

//khi logic đều là bất đồng bộ không phụ thuộc, có thể xử lý song song, có thể kết hợp nhau, sử dụng promise.all
//promise all
var promise1= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        },2000);
    }
)//promise1

var promise2= new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },5000);
    }
)//promise2

Promise.all([promise1, promise2])//trả về 1 promise, tất cả promise xong thì mới lọt vào .then
    
    .then(function(result){
        //trả về 1 mảng[result1, result2]
        var result1=result[0];
        var result2=result[1];
        return result1.concat(result2);
    })//chỉ mất tổng thời gian bằng promise lâu nhất
//đáp ứng có thể chạy song song
//khi promise có 1 bị reject: tất cả promise lọt vào catch trả về của promise.all
