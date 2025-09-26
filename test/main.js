// console.log (Number.parseInt(undefined))
var myString1='Study Javascript'
var myString2="JS,Ruby,ReactJS,Python"
var date = new Date()
var myArray1=[
    'JS',
    'Ruby',
    'ReactJS',
    'Python'
]

var output='Hi'


var myArray2=myArray1.every((x)=> x == 'Python')
console.log(myArray2)


// const firstNode = document.createElement('div')
// firstNode.innerHTML=myArray1
// document.body.appendChild(firstNode)

const secondNode = document.createElement('div')
secondNode.innerHTML=myArray2
document.body.appendChild(secondNode)