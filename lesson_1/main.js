// ECMAScript 6 là gì?

//quy chuẩn viết code javascript
//Babel

// Let & Const
// 1. Var/ Let, Const: Scope, hosting
// 2. Const/ var, let; assignment

// Code block: if else, loop, {},...

if (true){
    var course ='Javascript basic!';
}

// Vì là khóa cơ bản, để tránh phức tạp nên chúng ta tạm coi let & const không được hoisted.
// điểm khác nhau: về phạm vi
// hosting sẽ được nhấc lên đầu

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó: const
// Khi cần gán lại giá trị cho biến: Let


/**
 * var a=1;
 * 
 * var a;
 * a=1;
 */

const a={
    name:'Javascript'
}
a.name='PHP'
console.log(a.name);

//có thể thay đổi thuộc tính của hằng, nhưng không thể gán a=

// let isSuccess=false;
// if(...){
//     isSuccess=true;
// }// nếu có gán lại thì dùng let
// //không có thì dùng const

// End: let & const   

// Template literals

const courseName='Javascript'
const description = 'Course name:' + courseName;

// template string: kiểu nội suy
const description1 = `Course name: ${courseName}`;

// Muốn viết \ phải viết \\
//Muốn viết ${} phải viết \${}

// Before:
const lines='Line1\n'+'Line2\n';

// After:
const lines_before=`Line1
Line2
Line3`;

// End: template string

// Arrow function

// Before:
function logger(log){

}

// After:
const logger2=(log)=>{

}

logger('Message...');

// Before:
const sum=(a,b)=>{
    return a+b;
}

// After:
const sum_after=(a,b)=>a+b;

// nếu viết sau => tự động hiểu là return

// nếu viết =>{} thì phải viết return như thường
// nhưng đối với trường hợp return object

const sum_after1=(a,b) => ({a:a,b:b});//return luôn 1 object

// arrow function chỉ có 1 đối số, có thể bỏ ngoặc

// Before:

const bai1=(log)=>console.log(log);

// After:

const bai2= log =>console.log(log);

//this: context

// Before:

const courses={
    name:'Javascript',
    getName: function(){
        return this;//this này là courses, đối tượng gọi tới
    }
}

// After:

const courses2={
    name:'Javascript',
    getName:()=>{
        return this;//sẽ log ra undefined, không có context
    }
}

// Arrow function không được dùng để tạo constructor

const coursess=function(name, price){
    this.name=name;
    this.price=price;
}
// nếu dùng arrow sẽ có lỗi không có constructor

// End: arrow function