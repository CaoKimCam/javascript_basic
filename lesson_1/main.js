

var myString ='Hoc JS'
// 1. Length
console.log(myString.length);

//2. Find index
console.log(myString.indexOf('JS'));//trả về 4; =-1 là không tìm thấy
console.log(myString, indexOf('JS',6))//bắt đầu tìm từ vị trí thứ 6
console.log(myString.lastIndexOf('JS'))//tìm vị trí từ 1cuối

//3.Cut string
console.log(myString.slice(4));//4,6 -3,-1(PHẢI SANG TRÁI)...

// 4.Replace
console.log(myString.replace('JS', Javascript));
//để thay đổi nhiều JS
console.log(myString.replace(/JS/g,'Javascript'))

// 5.Convert to uppercase
console.log(myString.toUpperCase());

// 6.Convert to lowercase
console.log(myString.toLowerCase());

// 7.Trim
console.log(myString.trim())

// 8. Split: cắt 1 chuỗi thành array
var language ='Javascript, PHP, Ruby';

console.log(language.split(', '));// xem ', ' là điểm chung để cắt
console.log(language, split('')); //cắt từng kí tự

// 9. Get a character by index: Lấy 1 kí tự bởi 1 index cho trước
const myString2 ='Son Dang';
console.log(myString2.charAt(0));//lấy vị trí số 0
//nếu truyền index không có vào, mà typeof ra string, đó là chuỗi rỗng
console.log(myString2[10])//undefined, còn nếu (10) sẽ ra string
