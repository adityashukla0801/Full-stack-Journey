let val;

const ulItem = document.querySelector('ul')
const listItem = document.querySelector('li');

val = ulItem.childNodes
val = ulItem.children
val = ulItem.children[0]
val = ulItem.children[0].textContent = 'Hello'
val = ulItem.children[0].nodeName
val = ulItem.children[0].nodeType
val = ulItem.children[1].children[0]
val = ulItem.children[1].children[0].id = 'task'
val = ulItem.firstChild
val = ulItem.firstElementChild
val = ulItem.lastChild
val = ulItem.lastElementChild
val = ulItem.childElementCount
val = ulItem.parentNode

val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement
val = listItem.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling




console.log(val)