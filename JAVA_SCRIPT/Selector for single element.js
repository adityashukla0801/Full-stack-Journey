// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').style.background = '#333333');
// console.log(document.getElementById('task-title').style.color = '#ffffff');
// console.log(document.getElementById('task-title').textContent = '#ffffff');
// console.log(document.getElementById('task-title').innerText = 'task');
// console.log(document.getElementById('task-title').innerHTML = '<span style = "color: red">adi</span>');



// Query Selector

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card'))
console.log(document.querySelector('li'))


document.querySelector('ul li:nth-child(3)').style.color = 'red'
document.querySelector('ul li:last-child').style.background = '#333333'
document.querySelector('ul li:nth-child(even)').style.background = '#f4f4f4'