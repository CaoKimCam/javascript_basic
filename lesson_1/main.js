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