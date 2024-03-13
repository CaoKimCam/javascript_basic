// Classes

function Course(name, price){
    this.name = name;
    this.price = price;
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 2000);

//Class: vẽ trên nhìn giống đối tượng hơn chút

class Courses{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

// End: Classes

// Default parameter values: giá trị tham số mặc định

function logger(log='Gia tri mac dinh!'){
    console.log(log);
}//để khi không nhập thì lấy giá trị mặc định

function logger2(log, isAlert =false){
    if(isAlert) return alert(log);
    console.log(log);
}

// với những giá trị không bắt buộc truyền, ta cần đặt default cho nó

// end: Default parameter values