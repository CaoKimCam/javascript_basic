// Tagged template literals

// khái niệm này khó hơn một chút vì phải đòi hỏi thưck hành

// function hightLight(...rest){
//     console.log(rest);
//     // rest mục đích lấy tất cả tham số truyền vào highlight và tạo thành một mảng
//     //phần tử thứ nhất chuổi chứa các chuỗi không nội suy
//     // pt2 nội suy
//     // pt3 nội suy
// }

function highlight([[first, ...strings],...values]) {
    //đã bóc tác được phần tử đầu tiên(phần tử có array(3))
    // [[first, ...strings],...strings]: bóc tiếp được array(1) của pt1

    return values.reduce(
        (acc, curr)=> [ ...acc, `<span>${curr}</span>`, strings.shift() ], [first]
    )
    .join('');

    // "Học lập trình","<span>Javascript</span>", "tại", "<span>F8</span>", "!"
    // .join lại thành 1 chuỗi html
}

var brand ='F8';
var course ='Javascript';

// hightLight `Học lập trình ${course} tại ${brand}`;

const html=hightLight `Học lập trình ${course} tại ${brand}`;
// ứng dụng của tagged template literals

