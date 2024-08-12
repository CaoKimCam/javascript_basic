// Optional chaining (?.)

const obj={

    name:'Alice',
    cat:{
        name:'Dinah',
        cat2:{
            name: 'Dinah2',
            cat3:{
                name: 'Dinah3'
            }
        }
    }
}

console.log(obj?.cat?.cat2?.cat3.name);
// sử dụng obptional chaining khi không chắc chắc key đó có tồn tại hay khổng?
// nếu nghi ngờ thêm option chaining vào (?)

