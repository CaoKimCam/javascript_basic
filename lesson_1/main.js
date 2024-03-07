//Start: Node properties

// 1. Element
// 2. attribute
// 3. text
var boxElement = document.querySelector('.box')
//box element: object nên sẽ có thuộc tính và phương thức
//để có thể xem thuộc tính và pthuc: đưa vào array hoặc object
([boxElement])// console.log

//biêt cần gì -> đi tìm -> có thể là tìm thuộc tính phù hợp
//có thể tìm hiểu thuộc tính = console.log và tìm kiếm
//thêm contenteditable: element chính nó và thẻ con của nố có thể được chỉnh sửa

//baseURI: lấy địa chỉ đang đứng, domain
//childElementCount: đếm số lg elment con(không tính text node)
//các node con đều có thuộc tính baseURI
//nodeValue: nội dung textnode(trong chhild nodes)

//classList
//nodeType=1(element),2(attribute),3(text)

//End: Node properties

//Start: DOM CSS
var boxElement=document.querySelector('.box')

console.log(boxElement.style);
boxElement.style.console.width='100px';
boxElement.style.height='200px'
boxElement.style.backgroundColor='red';
// Hoặc
Object.assign(boxElement.style, {
    width: '200px',
    height:'100px',
    backgroundColor:'red'
})
//Cả 2 ra CSS inline
//bài tập: Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00 và màu chữ của thẻ p thành màu #f05123.
var Element = document.querySelector('div.red')
Object.assign(Element.style,{
    backgroundColor: '#f00',
})
var pElement = document.querySelector('p')
pElement.style.color='#f05123'

//End: DOM CSS


// Start: ClassList Property

//ClassList property:

//add
//contains
//remove
//toggle: không có thì thêm, có thì gỡ bỏ
var boxElement=
    document.querySelector('.box')

console.log(boxElement.classList);//trả về DOMTokenList
//có thể lấy class qua index
//chính xác trả về value nằm trong class(trùng class index không tăng)
boxElement.classList.add('red')//chữ thành màu đỏ, vì đã css .red
boxElement.classList.add('red', 'blue')// thêm nhiều lớp
boxElement.classList.contains('red')//ví dụ thực tế, dùng ktra class open
boxElement.classList.remove('red')
setTimeout(() => {
    boxElement.classList.remove('red')
},3000);//sau 3s xoá màu đỏ
boxElement.classList.toggle('red')//có bỏ, không có thì thêm
//ứng dụng: bấm vào thì mở, bấm nữa thì đóng
setInterval(() => {
    boxElement.classList.toggle('red')
},3000);//chữ nhấp nháy
//bài tập
/**
 * Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.

Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div, nhưng trước hết các bạn phải lấy được danh sách các phần tử div ra nhé.
Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, không được sử dụng thuộc tính className nhé. 
*/
var divElements = document.querySelectorAll('div')
divElements.forEach(divElement=>{
    divElement.classList.add('box')
})
// End: ClassList Property