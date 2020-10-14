let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.head;
val = document.doctype
val = document.domain;
val = document.URL;
val = document.contentType;
val = document.characterSet;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[1];
val = document.links[1].id;
val = document.links[0].className;
val = document.links[0].classList[1];


val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);


scriptsArr.forEach(function(name) {
    console.log(name);
})


console.log(val);