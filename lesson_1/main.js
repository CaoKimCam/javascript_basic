//làm việc với mảng phần 2
/**
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */
var courses=[
    {
        id:1,
        name: 'Javascript',
        coin: 0
    },
    {
        id:2,
        name: 'HTML, CSS',
        coin: 250
    },
    {
        id:1,
        name: 'NodeJS',
        coin: 250
    }
]
//forEach(): duyệt qua từng phần tử của mạng
courses.forEach(function(course, index)//callback
{
    console.log(course);
    // console.log(index, course);//có thể thêm index
});
//thay cho dùng vòng lặp

//every:hữu ích kiểm tra các phần tử thoả điều kiện nào đó
var isFree= courses.every(function(course, index)//callback: gọi ngược lại hòm
{
    return course.coin===0
    //nếu sai dừng luôn, không duyệt nữa
});
//cấu trúc các hàm gần tương tự nhau

console.log(isFree);//nếu tất cả khoá học có coin đều =0 trả về true

//some(): ngược lại với every, nó kiểm tra toàn bộ
var isFree= courses.every(function(course, index)//cb
{
    return course.coin===0//chỉ cần có 1 cái đúng, nó sẽ trả về true
});

//find: tìm và trả
var isFree= courses.some(function(course, index)
{
    return course.coin===0
});

var isFree= courses.find(function(course, index)
{
    return course.name==='Ruby';
});
console.log(course);//nếu không có trả về undefined
//filter sẽ trả về tất cả phần tử thoả mãn, còn find trả về 1

//map: khi muốnn chỉnh sửa, thay đổi element của mảng
var newCourses = courses.map(function coureHandler(course1, index, originArray){
    // return course1;//sẽ trả về mảng cũ
    return{
        id: course1.id,
        name: `Khoa hoc: ${course1.name}`,
        coin: course1.coin,
        conText: `Gia: ${course1.coin}`,
        originArray: originArray
    }
});//phải truyền đối số, nếu không truyền bị lỗi
//trả về mảng có số ptu = mảng cũ//câllback
//sử dụng để hiển thị mã html

//reduce: ví dụ muốn nhận 1 kq duy nhất là tổng số coin
var i=0;
function coinHandler(accumalator, currentValue, currentIndex, originArray){//accumalator là biến lưu trữ
    //courses và originArray chung vùng nhớ, bị thay đổi là đổi chung
    i++;

    console.log(i, accumalator);
    return accumalator + currentIndex.coin;
}
var total = 0;
total = courses.reduce(coinHandler, 0);//0 là giá trị khởi tạo gán cho biến lưu trữ(total, accumulator)

//mấy hàm này giúp dễ hiểu, ngắn gọn, hiệu năng hơn for
var totalCoin = courses.reduce((a,b) => a+b.coin,0)


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(courses){
   return courses.reduce((a,b)=> a+b.gold, 0) 
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23
