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

