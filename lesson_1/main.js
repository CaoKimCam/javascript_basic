// LOOP

/**
 * 1.for - lặp với đk đúng
 * 2.for/in- lặp qua key
 * 3.for/of - lặp qua value
 * 4.while - lặp khi đúng
 * 5.do/while
 */

//bài 1.vòng lặp for
for (var i=1; i<=1000; i++){
    console.log(i);
}

// Làm bài
function getRandNumbers(min, max, length){
    var arr = new Array;
    for (var i=1; i<=length; i++)
    {
        var a = Math.random()*(max-min)+min;
        arr.push(a);
    }
    return arr;
}

getRandNumbers(1,6,3);

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */

for(; 1 <=1000; i++){}//có thể để trống 1 trong 3 cái này, 2 trống sẽ bị vô hạn

//Loop: part 3

//vòng lặp for in
var myInfo={//object myinfo
    name: 'Son',
    age: 18,
    address: 'Ha Noi'
}
for (var key in myInfo){
    console.log(myInfo);//stt key: dạng số
    // console.log(myInfo[key]); //nếu muốn lấy ten key
}

var mySTring = 'Javascript'
for (var key in languages){
    console.log(languages[key]);//Nó sẽ in ra từng chữ, J,a,v,a,s,c....
}


//vòng lặp for off: muốn lấy ra từng ptu của 1 mạng hoặc
//từng ptu của 1 chuỗi
//không dùng cho object, nếu muốn dùng phải biến đổi
var myInfo=[//object myinfo
    'Javascript',
    'PHP',
    'Python'
]
var languages ='son dang'
for (var value of languages){
    console.log(value);
}
//trường hợp object
console.log(Object.keys(myInfo))//trả về 1 mảng
for (var value of Object.keys(myInfo)){
    console.log(value)//lấy được values của object
}

//while

//do while
//break và continue
//continue:bỏ qua những lệnh dưới

//nested loop




var array =['a', 'b', 'c', 'b', 'c'];
console.log(new Set(array));//xoá trùng lặp, nhưng nó ở dạng set
console.log([...(new Set(array))])//giải về dạng mảng

//đệ quy
//*. tạo ra vòng lặp bằng đệ quy
function loop(start, end, cb){
    if (start >= end){
        cb(start);
        return loop(start+1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length-1);
loop(0, array.length-1, function(index)){
    console.log('index: ', index);
}
// tính giai thừa
function giaiThua(num){
    var output =1;
    for (var i=num; i>0; i--){
        output = output*i;
    }
    return output;
}
giaiThua(3);