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

