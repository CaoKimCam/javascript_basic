//mảng: chỉ mục được đánh tự động bắt đầu từ số 0


//tạo mảng
var languages = [
    'Javascript',
    'Javascript',
    'Javascript',
    'Javascript'
];
console.log(languages);

var languages = new Array (
    'Javascript',
    'Javascript', function(){},
    123
)// cách 2 tạo mảng

console.log(typeof languages)
// console.log(typeof{}): đây là object
//cách trả về typeof phân biệt array và object
console.log(Array.isArray(languages));

//truy xuất mảng, index(key): chỉ mục
console.log(languages.length);
console.log(languages[1]);
