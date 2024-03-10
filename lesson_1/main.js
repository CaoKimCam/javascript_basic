

// Fetch: để lấy dữ liệu từ back end trả về

// Front-end: xây dựng giao diện người dùng
// Kể cả logic xử lý phía giao diện: đóng mở

// back-end: xây dựng logic xử lý và csdl
// + Cơ sở dữ liệu
// https://fullstack.edu.vn/learning/javascript-co-ban?id=845b7b3e-86d9-4af9-987b-4d7cd124ed43

// Backend -> API(URL) -> Fetch -> JSON/XML
// JSON.parse -> Javascript types
// ->Render ra giao diện với HTML

//json Viewer để dễ nhìn (Chrome)
// tham khảo: jsonplaceholder4(1 placeeholder rest api)

//fetch sử dụng promise

var postApi='https://jsonplaceholder.typicode.com/posts'

//stream
fetch(postApi)
    .then(function(response){

        return response.json;
        // JSON.parse: JSON -> Javascript type

    })
    .then(function(posts){
        // console.log(posts)//trả về mảng nhiều đối tượng
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        
        var html=htmls.join('')
        document.getElementById('post-block').innerHTML=html
    })



    //JSON server
    // https://fullstack.edu.vn/learning/javascript-co-ban?id=5d91ae2c-f665-4b2c-8c8e-11d7f9a6eac9
//response.json: trả về promise, đã parse về JS type
//json-server:fake api
//npm: npmjs, npm được cài kèm khi cài node
//học nodejs để hướng dẫn cài đặt npm

var courseApi='local của json server fake api vừa tạo'
fetch(courseApi)
    .then(function(response){
      response.json()  
    })
    .then(function(courses){

    })


// Sử dụng Postman làm việc với REST API:
// https://fullstack.edu.vn/learning/javascript-co-ban?id=61546753-d397-43ef-b948-ec7f3b3fd880
// API server(Fake)/Mock API

// Postman: CRUD qua đây, như làm việc với API thật



// Thêm/sửa/xóa khóa học với Fetch và REST API
//ví dụ: thêm sửa xoá khoá học



var courseApi=''//biến để lưu api: như localhost:3000/courses

function start(){
    // getCourses(function(courses){
    //     renderCourses(courses);
    // });//sau khi getcourses thì rendercourse
    //tôi ưu code trên:
    getCourses(renderCourses)
    handleCrateForm();
}

start();

//Functions
function getCourses(callback){//lấy ra khoá học
    fetch(courseApi)
        .then(function(response){
            return response.json()
        })
        // .then(function(response){}): cách 1
        .then(callback);

}
function renderCourses(courses){
    var listCoursesBlock=document.querySelector('#list-courses');
    var htmls= courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">&time;</button>
            </li>
        `
    });
    listCoursesBlock.innerHTML=htmls.join('');
}
//đọc lại: difficult

//cách search: fetch mozilla hoặc w3school... method POSTS...

function createCourse(data, callback){
    var options ={
        method: 'POST',
        headers:{},//nhớ thêm header vào
        body: JSON.stringify(data),
    };
    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback)
}

function handleCrateForm(){
    var createBtn=document.querySelector('#create')
    createBtn.onclick(function(){
        var name = document.querySelector('input[name="name"]').nodeValue;
        var description=document.querySelector('input[name="description"]').nodeValue;
        
        var formData={

            name: name,
            description: description
        }
        createCourse(formData, function(){
            getCourses(renderCourses);
        });
    })
}

function handleDeleteCourse(id){
    var options ={
        method: 'DELETE',
        headers:{},//nhớ thêm header vào
        body: JSON.stringify(data),
    };
    fetch(courseApi+'/'+id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem=document.querySelector('.course-item-'+id);
            if (courseItemm){
                courseItem.remove();//xoá khỏi dom//không cần render lại
            }
        })
}