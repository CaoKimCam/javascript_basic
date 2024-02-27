//Object constructor

//tạo object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new user('Sơn', 'đặng', 'avatar')
var user= new User('vũ','nguyễn', 'avatar')
console.log(author.constructor === User);
console.log (user);

author.title ='Chia sẻ dạo tại F8'
user.comment = 'liệu có khoá asp.net không ad'//vẫn cố thể chứa những pthuc, thuộc tính riêng
console.log(author);
