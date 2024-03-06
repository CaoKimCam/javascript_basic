
var listItemNodes = 
    document.querySelectorAll('.box-1 li');//output đúng 2 thẻ li

// Công việc 1: sử dụng tới `boxNode`
var boxNode=document.querySelector('.box-1')
// Công việc 2; sử dụng tới các li elements là con `.box-1`
boxNode.querySelectorAll('li')
// hoặc
boxNode.getElementsByTagName('li')

