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


//example: reduce
var totalCoin = courses.reduce(function(total, course){
    return total+course.coin;
},0);//initial value không bắt buộc, tuy nhiên nếu không có, nó trả về object, nó lấy giá trị đầu tiên làm giá trị khởi tạo, lần đầu tiên nó chạy luôn object đầu
//nói chung, mong nhận gì thì initial là cái đó

//Flas - "làm phẳng" mảng Dept array
var depthArray =[1,2,[3,4],5,6,[7,8,9]];

var flatArray =depthArray.reduce(function(flatOutput, deptItem){
    return flatOutput.concat(deptItem);//nối mảng
},[])

//lấy ra các khoá học và đưa vào mảng mới
var topics =[
    {
        topic: "Front-end",
        courses:[
            {
                id:1, 
                title:"HTML, CSS"
            },
            {
                id:2,
                title:"Javascript"
            }
        ]
    },
    {
        topic:"Back-end",
        courses:[
            {
                id:1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourses =topics.reduce(function(course, topic){
    return courses.concat(topic.course);
},[]);

//exercise reduce
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(array){
    var christopherNolan = array.filter(function (movie){
      return movie.Director === "Christopher Nolan";
    });
  
    var total = christopherNolan.reduce(function(output, item){
      return output + parseFloat(item.imdbRating);
    },0);
  
    var IMDB= total/(christopherNolan.length);
    return IMDB;
  }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675

//Tự tạo phương thức reduce
const numbers =[1,2,3,4,5]
const results = numbers.reduce((callback, initialvalue)=>{
    return total + number;
},10)

Array.prototype.reduce2 = function(callback, initialvalue){
    let i =0;
    if (arguments.length<2){
        i++;
        initialvalue=this[0];
    }
    for(; i<this.length; i++){
        initialvalue = callback(initialvalue, this[i], i, this)
    }
    return initialvalue;//initial value cũng là result;
}

//exercise

 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj (arr){
    return arr.reduce(function(a,b){
        a[b[0]]=b[1];  
        return a; 
    },{})
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// String/Array includes() method
//String.prototype.includes: nó sẽ cho thấy có này trong String]
//dùng kiểm tra chuỗi có chứa 1 cái gì đó không

var title='html web ';
console.log(title.includes('web'))//tìm từ 0, đúng thì trả về true
console.log(title.includes('web',10))//10 vị trí bắt đầu tìm kiếm

var course =['Javascript', 'php', 'dart']
console.log(course.includes('html'));//tương tự với string
//index -1; lấy độ dài mảng 3+-1; nó tìm từ 2
//-4+3=-1 tính là 0


