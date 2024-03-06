//Cái nào học trước, cái nào học sau? Lí do tại sao?->Học tập, làm việc hiệu quả hơn

// Element: ID, class, tag, CSS selector, HTML collection

var headingNode= document.getElementById('heading');
console.log(headingNode);//sẽ hiện full, này chỉ là object mô tả đây là 1 node

//=> phải đưa vào array hoặc object, để không hiểu đây là object
console.log(
    {
        element: headingNode
    }
);//output: {element: h1#heading}

var headingNodes = document.getElementsByClassName('heading');
//trả về HTML Collection(3)[h1.heading, h1.heading, h1.heading]: nếu có 3 phần tử
//tag
document.getElementsByTagName('p')
//css selector
var headingNode = document.querySelector('.heading')//trả về thẻ h1

var headingNode = document.querySelector('.heading .heading-2')//css selector như trước
document.querySelector('.box .heading-2:first-child')//1
headingNodes= document.querySelectorAll('heading-2')//trả NodeList: cơ bản có thể xem như mảng
headingNodes[1]//để selecter Node 1

// HTML collection: quy ra 1 vài thẻ
document.forms
document.forms['form-1']//lấy form có id="form-1"
// cú pháp trên do form-1 không đúng kiểu đặt tên, do đó có cách 2
document.forms.test//cho form id="text"
// hoặc: để trả về thẻ a có thuộc tính name;
document.anchors

