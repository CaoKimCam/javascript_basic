

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

