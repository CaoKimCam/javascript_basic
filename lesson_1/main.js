

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

