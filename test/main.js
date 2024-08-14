console.log (Number.parseInt(undefined))
var myString1='Study Javascript'
var myString2="JS,Ruby,ReactJS,Python"
var date = new Date()
var myArray1=[
    'JS',
    'Ruby',
    'ReactJS',
    'Python'
]
console.log(myArray1.join()===myArray1.toString())
console.log("Today is ",date.getDate())
console.log("Current time is ",date.getHours()>12?date.getHours()-12:date.getHours,date.getHours>12?"PM : ":"AM : "
, date.getMinutes()," : ", date.getMilliseconds())
console.log(myArray1.shift())
console.log(myArray1)
// console.log(myString1.charAt(0))
// let x=2
function newFunction(){
    let x=1
    var y=1
    console.log(x);
}
// console.log (y)
newFunction()
// arguments lists
