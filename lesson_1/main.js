
//Object trong Javascript

var myInfo ={
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
}
//muốn đặt tên vi phạm nguyên tắc: 'full-name'

console.log(myInfo)

//thêm 1 cặp key, value sau khi object được tạo
myInfo.email = 'ctkc@gmail.com';
myInfo.['my-email'] = '22'//cách2

//lấy ra value
myInfo.name;
myInfo.['full-name'];
//key không có, trả về undifined

var myKey='address';
myInfo[myKey];

//có thể định nghĩa key mới qua biến
var phone = 'Phone-Number';
var myInfo ={
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [phone]: '033666444'//nếu bỏ ngoặc vuông, nó sẽ nghĩ phone là key
}

//cách xoá cặp key value trong object
delete myInfo.age;

//có thể lưu trữ value là 1 function
var myInfo ={
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [phone]: '033666444',
    getName: function(){
        return myInfo.name;//typeof myinfo.getname ra function
        //phần tử là function ta gọi là phương thức, còn lại gọi là thuộc tính
    }
}
console.log(myInfo.getName());//do là function phải có () để nó trả về
