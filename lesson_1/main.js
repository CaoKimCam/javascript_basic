// làm việc với mảng

var languages =[
    'Javascrip',
    'PHP',
    'Ruby'
];
//1. toString
console.log(languages.toString());//array sang chuỗi tự động ngăn cách bởi dấu ,

//2.Join
console.log(languages.join());//giống join
console.log(languages.join(' - '));//các phần tử ngăn cách bởi ' - '

//3. Pop
console.log(languages.pop())// xoá element cuối mảng, return p.tử đã xoá
//nếu hết trả về undifined

//4. Push
console.log(languages.push('Dart','Java'));//thêm 1 hoặc nhiều ptu, trả về độ dài mảng

//5. Shift: xoá đi phần tử đầu mảng và trả về ptu đã xoá
console.log(languages.shift());

//6. Unshift: thêm đầu mảng 1 hoặc nhiều ptu, trả về length

//7. Splicing: xoá, cắt hoặc chèn ptu mới vào
languages.splice(0,4)//0: vị trí start(đầu chuỗi ptu), 4:delete count(số lg ptu muốn xoá)
languages.splice(1,0,'Dart'); //1: vị trí chèn, 0: có xoá không, 'Dart' được chèn vào

//8. Concat: nối Array
var languages2 = [
    'dart',
    'Ruby'
]
languages.concat(languages2); //languages: mảng gốc

//9. Slicing: cắt một vài element hoặc toàn bộ
languages.slice(1,3);//1 là index,3 là index dừng việc cắt(chỉ cắt 1,2) (cắt hết mảng ta bỏ 3)
languages.slice(0);//copy mảng
//lấy xuôi ngược đều được

