//PreventDefault and StopPropagation

//1.preventDefault: loại bỏ hành vi mặc định trên thẻ
//vd1
// var aElements=document.anchors;//lấy thẻ a có tên
var aElements=document.links;
for(var i=0; i<aElements.length; i++){
    aElements[i].onclick=function(e){
        if(!e.target.href.startWith('#')){
            e.preventDefault();
        }
    }
}//khi không bắt đầu bằng url=#; không chuyển trang
//vd2
//để lắng nghe sự kiện click vào ul
document.querySelector('ul').onmousedown=function(e){
    e.preventDefault;//không nhảy khi nháy chuột xuốn li
}
document.querySelector('ul').onclick=function(e){

}


//2.stopPropagation: stop sự kiện nổi bọt
//khi click vào con, nhưng nó cũng tác động lên thẻ cha(nếu cha cũng có onclick)
document.querySelector('button').onclick=function(e){
    e.stopPropagation();
}


//End: PreventDefault and StopPropagation
//mẹo: preserve load: giữ lại, khong bị load lại khi chuyển trang



//Event listener:lắng nghe sự kiện
//lắng nghe, huỷ bỏ lắng nghe, xử lý nhiều sự kiện
var btn=document.getElementById('btn')//lấy có id = btn
btn.onclick= function(e){

}
function viec1(){
    console.log(viec1)
}
btn.addEventListener('click', function(e){
    console.log('Event 1')
})
btn.addEventListener('click', function(e){
    console.log('Event 2')
})
btn.addEventListener('click',viec1)
//sau 3s muốn remove 
setTimeout(function(e){
    btn.removeEventListener('click', viec1)
},3000);

//đồng loạt các sự kiện được thực hiện theo thứ tự khi click btn
//End: Event listener