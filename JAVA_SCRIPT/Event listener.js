// document.querySelector('.clear-tasks').addEventListener('click' ,
// function(e){
//     console.log('hello');
//     e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click' ,onClick);
function onClick(e){
let val;
val = e;
e.preventDefault();

val = e.target;
val = e.target.className;
val = e.target.classList;
val = e.type
val = e.timeStamp
val = e.clientX
val = e.clientY
val = e.offsetY

console.log(val);

}

