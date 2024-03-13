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

