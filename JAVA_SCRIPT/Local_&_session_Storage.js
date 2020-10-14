// localStorage.setItem('name','aditya'); 
// localStorage.setItem('age', 29)

// // sessionStorage.setItem('name', 'adi')

// // localStorage.removeItem('name')
 
// // localStorage.clear()

// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')


// console.log(name , age)

document.querySelector('form').addEventListener('submit',
function (e){
  const task = document.getElementById('task').value;
  // localStorage.setItem('task',task)
  // console.log(task)

  let tasks;
   
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
  alert('Task Saved')
  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(ele) {
  console.log(ele)
});