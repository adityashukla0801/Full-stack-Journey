// replace elements

const newHeading = document.createElement('h2')
newHeading.id = 'task-title';
newHeading.append(document.createTextNode('Task-List'))

const oldHeading =document.getElementById('task-title');
const cardAction = document.querySelector('.card-action')

cardAction.replaceChild(newHeading, oldHeading);

// remove elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3])

//classes
const firstli = document.querySelector('li');
const link = firstli.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test')
val = link;

link.getAttribute('href')
link.setAttribute('href', 'http://google.com')
link.setAttribute('title' , 'google')
val = link.hasAttribute('title')
link.removeAttribute('title')
val =link
console.log(val);