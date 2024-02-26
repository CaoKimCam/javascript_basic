// console.log('Day la log')

// confirm('Xac nhan ban du tuoi!');
// prompt('Xac nhan ban du tuoi!');

/* setTimeout(function(){
    alert('Thong bao')
}, 3000)//ms*/

/* setInterval(function()){
    alert('Thong bao') 
,1000}
//khác với settimeout là nó lặp lại
*/
function writeLog(){
    var myString ='';
    for (var param of arguments){
        myString += `${param} -`
    }
    console.log(myString)
}
writeLog('Log 1', 'Log 2');