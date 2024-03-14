// Bài tập

/**
 * Bạn hãy sử dụng spread để sao chép tất cả các key 
 * và value từ object person1 sang person2
 */
const person1 = {
    name: 'Son',
    age: 21
}


const person2 = {...person1};

// Expected results
console.log(person2.name) // Output: 'Son'
console.log(person2.age) // Output: 21
console.log(person1 === person2) // Output: false