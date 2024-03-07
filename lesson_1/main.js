// Start: DOM EVENTS
//ví dụ: bắt đầu tải,tải, tải xong, kéo, thả...
// 1. attribut events
// 2. assign event using the element node(gán sự kiện qua element node= 1 function)
//thêm on vào trước event: onclick, onmouseover, onmouseout
//từ thẻ cha bên ngoài nổi bọt dần: khi click thẻ con, vẫn nghe được thẻ cha
//element trong lắng nghe trước sau đó mới tới thẻ ngoài

var h1Element =
    document.querySelector('h1')//1 h1 đầu tiên
h1Element.onclick = function(){
    console.log(Math.random)//khi click h1: code thực thi
}

h1Element.onclick=function(e){
    console.log(e);//khi click trả về sự kiện e gồm nhiều: target,...
}//tự tìm hiểu thêm

//để trả về nhiều
var h1Elements = document.querySelectorAll('h1')
for(var i =0; i<h1Elements.length; i++){
    h1Elements[i].onclick = function(e){
        console.log(e.target);
    }
}

//bài tập
/**
 * Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
 */
var btnElement = document.querySelector('button')

btnElement.onclick=function(e){
    e.target.style.color= '#fff'
}
// End: DOM EVENTS

// Start: DOM events example
// Input/select

//vd1
var inputElement=
document.querySelector('input[type="text"]')

inputElement.onchange=function(e){
    console.log(e.target.value);//lấy value khi input thay đổi, và blur
}

inputElement.oninput=function(e){
    console.log(e.target.value);//láy value khi input thay đổi: trực tiếp khi gõ
}
//vd2: checkbox
var inputElement=
document.querySelector('input[type="checkbox"]')

inputElement.onchange=function(e){
    console.log(e.target.checked);//kiểm tra đã check
}
// vd3:select
var inputElement=
document.querySelector('select')

inputElement.onchange=function(e){
    console.log(e.target.value);//lấy value thẻ option mà ta chọn(in value trong thẻ option chứ không phải cái hiển thị)
}
// vd4:onkeyup/onkeydown
inputElement.onkeydown= function(e){
    console.log(e)//trả lại đối tượng KeyboardEvent(vẫn có target)
    console.log(e.which)//in ra giá trị phím đang bấm(ví dụ:27(của Esc))
}
//keypress: nhấn giữ(không nhấn esc), xử lý liên tục khi nhấn

//document cũng có thể lắng nghe sự kiện

// End: DOM events example
//dữ liệu lưu vào biến, gửi qua ajax gửi lên server