//Callback ?

//là hàm được truyền qua đối số
//khi gọi hàm khác

function myFunction(param){
    if (typeof param ==='function'){

    }
}

function myCallback(value){

}

myFunction(myCallback);//thoả: hàm, được truyền qua đối số

//ví dụ
function sumCb(a, b) {
    return a+b;
}

function subCb(a,b){
return a-b;
}

function multiCb(a,b){
    return a*b;
}
function divCb(a,b){
    return a/b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

//Callback
//1.Là hàm
//2.truyền qua đối số
// Được gọi lại(trong hàm nhận đối số)

var courses = [
    'javascript',
    'PHP',
    'Ruby'
]

courses.map(function(course){
    console.log(course)
})//trong map có gọi lại function, nên là call back

//ứng dụng
var htmls = courses.map(function(course){
    return `<h2>${course}</h2>`
});
console.log(htmls.join(''));

//viết map2: định nghĩa dạng Array
Array.prototype.map2 =function(callback){
    // console.log(this);
    var output =[];
    var arrayLength= this.length;
    for (var i=0; i<arrayLength; i++){
        var result = callback(this[i],i);
        console.log('result: ', result);
        output.push(result);
    }

    return output;
}

var htmls = courses.map2(function(course, index){
    return `<h2>${course}</h2>`
});
console.log(htmls.join(''));
//kết quả nhận được y như map

//

var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
//không phải lúc nào độ dài cũng tượng trưng cho số lượng ptu
//gán course.length=10 thì length sẽ in ra 10
//do đó lặp = vòng lặp ta nên dùng for in
for (var index in courses){
    //for in chỉ lặp lại những phần tử thực
}//còn for thường, sẽ lập length lần

// var courses = new Array(10): mảng trống, gán đọ dài 10
// var courses = new Array(10,2):được hiểu là 2 ptu của mảng

//My forEach() method
//foreach: check care lenth
var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
//object prototype: sinh ra 1 element bên trong-> in ra forEach2
// for in duyệt qua cả prototype

Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index))//kiểm tra có nằm trong phương tính, thuộc tính gần nhất của object không
        {
            callback(this[index], index, this)
        }
    }
}

courses.forEach2(function(course, index, array){
    course.log(course,index, array);
})
//Ôn lại để hiểu:
// 1. Object protoype
//2. For in
// 3. hasOwnProperty

//my filter() method: không lặp array trống, trả về...
Array.prototype.filter2 = function(callback){
    var output=[];
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (result){
                output.push(this.index);
            }
        }
    }
    return output;
}

var filterCourses = courses.filter2(function(course, index, array){
    return course.coin>700;
})

//value types and reference type: xem mảng mới, mảng cũ...
