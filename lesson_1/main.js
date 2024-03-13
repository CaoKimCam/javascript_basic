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