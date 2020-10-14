const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')

// // form.addEventListener('submit', runEvent)
// taskInput.addEventListener('keydown' , runEvent)
// taskInput.addEventListener('keyup',runEvent)
// taskInput.addEventListener('keypress', runEvent)
// taskInput.addEventListener('focus',runEvent)
// taskInput.addEventListener('blur', runEvent)
// taskInput.addEventListener('cut',runEvent)
// taskInput.addEventListener('copy',runEvent)
// taskInput.addEventListener('paste',runEvent)

taskInput.value = ''

function runEvent(e){
    console.log(`Event type: ${e.type}`)
    // console.log(e.target.value)
    // heading.innerHTML = e.target.value
    // console.log(taskInput.value)
    // e.preventDefault();
}

