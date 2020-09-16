let li = document.createElement('li');
li.className = 'collection-item';
li.setAttribute('title', 'new-item');
li.appendChild(document.createTextNode('Hello Word'));console.log(li);

const link =document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class= "fa fa-remove"></i>';
li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);
