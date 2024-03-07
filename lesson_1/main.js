// Attribute node & Text node

// DOM attribute
var headingnElement=
    document.querySelector('h1')

headingnElement.title="Heading"//set


headingnElement.setAttribute('class','heading')//ouput: class="heading"
//tuỳ biến
// không thể lấy trực tiếp headingElement.class đối với tuỳ biến
headingnElement.setAttribute('class');//get giá trị

//bài tập
var h1Element = document.querySelector('h1');
h1Element.setAttribute('title',"F8 - Học lập trình để đi làm")
h1Element.setAttribute('data-title',"F8 - Học lập trình để đi làm")
var aElement = document.querySelector('a');
aElement.setAttribute('href',"https://fullstack.edu.vn/")
aElement.setAttribute('target',"_blank")


// InnerText vs textContent Property

var headingElement = 
    document.querySelector('h1');

    //lấy text trong element node
    headingElement.innerText;//lấy như ta thấy
    headingElement.textContent;//lấy cả những khoảng cách, nguyên bản takenote

    headingElement.innerText = 'New heading';//có thể change
    headingElement.textContent ='New heading'
//inner là tt của element node
//text tồn tại trên element và take note

//Start: InnerHTML vs OuterHTML Property

//cách thêm 1 element vào 1 elemnent có sẵn
var boxElement = document.querySelector('.box')
boxElement.innerHTML='<h1>Heading</h1>'//thêm element node h1+text node(Heading) vào trong element node box
//sau khi ta có thể get như element node thường
//nếu '<h1>Heading</h1>' bỏ h1 thì nó thành text node thường
boxElement.innerHTML='Heading'
boxElement.innerHTML='<h1 title="Heading">New Heading</h1>'//thêm attribute

//innerHTML: có thẻ thêm: element, attribute, text node
boxElement.innerHTML//nó sẽ lấy nội dung html bên trong element và quy thành dạng chuỗi

//outer html
//get: lấy html ra từ chính vị trí gọi outerHTML
//set: ghi đè chính thẻ gọi outerHTML
//sau set in ra nó vẫn trả ra cũ, nhưng trong DOM thật khong còn nữa

//bài tập
//1. chèn giá trị của html vào ul
function render(html) {
    var ElementText= document.querySelector('ul');
    return ElementText.innerHTML=html
}

//2.
/**
 * Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
 */
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var array = courses.map(function(course){
        return `<li>${course}</li>`
    })
    document.querySelector('ul').innerHTML=array.join('')
}

render(courses)
//End: InnerHTML vs OuterHTML Property
