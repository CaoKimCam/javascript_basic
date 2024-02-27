//Object prototype: nguyên liệu tạo nên object của 1 hàm tạo

//nguyên mẫu của hàm tạo

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

//prototype giúp thêm được 1 thuộc tính bên ngoài hàm tạo
User.prototype.className = 'F8';//sẽ nhìn thấy trong __proto__
User.prototype.getClassName = function(){
    return this.className;//lưu ý: this.className để gọi từ bên ngoài
}


