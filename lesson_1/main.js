// Classes

function Course(name, price){
    this.name = name;
    this.price = price;
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 2000);

//Class: vẽ trên nhìn giống đối tượng hơn chút

class Courses{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

// End: Classes

// Default parameter values: giá trị tham số mặc định

function logger(log='Gia tri mac dinh!'){
    console.log(log);
}//để khi không nhập thì lấy giá trị mặc định

function logger2(log, isAlert =false){
    if(isAlert) return alert(log);
    console.log(log);
}

// với những giá trị không bắt buộc truyền, ta cần đặt default cho nó

// end: Default parameter values

// Start: Enhanced object literals

// 1. Định nghĩa key: key value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến
// cụ thể: cung cấp cách viết ngắn gọn hơn


// 1.
var name='Javascript';
var price= 1000;
var course={
    name,// name: name,
    price, // price: price
};


// 2.
var course= {
    name,
    price,
    getName(){//getName: function()
        return name;
    }
}

// 3.
var fieldName='name';
var fieldPrice='price';

const course={
    [fieldName]: name,//name: 'Javascript'
    [fieldPrice]: price
}//trường hợp cần tuỳ giá trị biến mà lấy ra value tương ứng thì dùng này
// còn bình thường vẫn dùng name:...

// End: Enhanced object literals

// Start: Destructuring (Phân rã), Rest


//array
var array = ['Javascript', 'PHP','Ruby'];

// vd: tạo biến a,b,c lưu giá trị này vào
//before
var a=array[0];
var b=array[1];
var c=array[2];

//after
var[a,b,c]=array;

// cách lấy phần tử còn lại, nếu đã lấy ra a
var [a, ...rest]=array;
//khi đó rest ra b,c

//object
var course ={
    name: 'Javascript',
    price: 1000
}

// object có object con
var course ={
    name: 'Javascript',
    price: 1000,
    children: {
        name: 'PHP'
    }
}

var {name:parentName, children:{name}} = course;
//đổi tên name khi in ra thành parentName để không bị trùng với name


var {name, price}=course;// với object cần đúng name
var {name, ...rest}=course;
function logger(...params){
    console.log(params);
}
console.log(rest);
//sử dụng kết hợp distructuring: toán tử rest(toán tử còn lại)

// trương hợp còn lại là spread
console.log(1,2,3,4,5,6,7,8,9,10,11,12)


// End: Destructuring, Rest



function logger(...parameters) {
    console.log(parameters);
}

logger(1,2,3,4);
// rest lấy ra phần còn lại

function logger(a,b,...parameters) {
    // có thể làm việc với toán tử a, b, parameters
}

// vd2 cho dùng rest
function logger({name, price}){}

// name, price thuộc object

// Start: Spread
var array1=['Javascript', 'Ruby','PHP'];
var array2=['ReactJS','Dart'];

var array3= [...array1,...array2];
// bỏ ngoặc đi và lấy các biến: nối mảng

// có thể dùng để hơp nhất 2 mảng
var object1={
    name:'Javascript'
}
var object2={
    price:100
}

var object3= {
    ...object1
    ,...object2
};

// toán tử spread khi ... nó sẽ bỏ dấu ngoặc với array hoặc object
var array1= ['Javascript', 'Ruby']
var array2=['Php','Dart'];

var array3= [...array1,...array2];
// sử dụng rất nhiều
// kết hợp lấy address bài học 1, lấy bài tập address khác

var defaultConfig = {
    app:'https://domain-trang-khoa-hoc',
    apiVersion:'v1',
    other: 'other'
}

var exerciseConfig ={
    ...defaultConfig,
    api:'https://domain-trang-bai-tap'
}

function logger(...rest){
    for (var i=0; i<rest.length; i++){
        console.log(rest[i]);
    }
}
logger(...array);//spread
// đây là tác dụng hợp nhất 
// tương tự với object
// nếu 2 name key trùng nhau, thì sẽ lấy cái hàm định nghĩa sau

// End: Spread

